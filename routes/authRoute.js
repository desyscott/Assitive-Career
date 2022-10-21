import express from "express";
import { v4 as uuidv4 } from 'uuid';
import pkg from "mongoose";
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcrypt";
import fs from "fs"
import multer  from 'multer'
import path from 'path';

const router = express.Router();

const { isValidObjectId } = pkg;

import authModel from "../models/authModel.js";
import userEmailConfirmation from "../models/userEmailConfirmation.js";
import resetPassword from "../models/resetPasswordModel.js";
import { isResetTokenValid } from "../middleware/resetTokenValid.js";
import { mailTransport } from "../utilitis/Mail.js";
import { sendError } from "../utilitis/responseHandler.js";
import {createToken} from "../utilitis/generateToken.js"
import {data} from "../data/CourseData.js"

import {requireAuth}  from "../middleware/authMiddleware.js";

const __dirname = path.resolve();

//storage engine
const MimeTypes =["application/pdf","application/msword"]

const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads")
  },
  fileFilter:(req,file,cb)=>{
    cb(null,MimeTypes.includes(file.mimetypes))
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  },
})
//configure the storage engine
const upload=multer({storage:storage})

const handleErrors = (err) => {
  console.log("handleErrors",err.message, err.code);
     let errors= {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    emailVerifyMessage: "",
  };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
    return errors;
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "The password is incorrect ";
    return errors;
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "This email has already been registered";
    return errors;
  }

//email not verify error
  if (err.message === "Email has not been verified check your inbox") {
    errors.emailVerifyMessage = "Email has not been verified check your inbox";
    return errors;
  }

  // signup validation errors
  if (err.message.includes("users validation failed")) {
    // console.error(err)
    // console.error(Object.values(err.errors))
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};




router.get("/seed",expressAsyncHandler(async(req,res)=>{
  const userCred = await authModel.insertMany(data.users);
  res.send({userCred});
}))


router.post("/signup", upload.single("cv"), expressAsyncHandler(async (req, res) => {
  if(req.file===null){
    return res.status(400).json({msg:"No file uploaded"})
  }
  
  // const file = req.files.file;
  // console.log(file)
  try {
    const user = await authModel.create({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      role:req.body.role,
      email:req.body.email,
      CV:{
        data:fs.readFileSync("uploads/" + req.file.filename),
        contentType:"application/pdf",
        },
      password:req.body.password,
    });
    
    // file.mv(`${__dirname}/client-side/public/uploads/${file.name}`,(err)=>{
    //   if(err){
    //     console.error(err);
    //    return res.status(500).send(err);
    //   }
    // })
    
    //sending the jwt cookie to user browser when sign out
    // const maxAge= 3*24*60*60;
    const token = createToken(user);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    
    const verificationString = uuidv4() + user._id;
    const verifyUserEmail = userEmailConfirmation.create({
      userId: user._id,
      verificationString:verificationString,
    });
    //sending an email
    mailTransport().sendMail({ 
      from: process.env.AUTH_EMAIL, 
      to: user.email,
      subject: "verify your account",
      html: `<h1>welcome to Shop Now!!!! ${user.firstName}</h1>
      <p>You’re receiving this message because you recently signed up for a Shop Now!!!! account.
      Confirm your email address by clicking the button below. This step adds extra security to your business by verifying you own this email.</p>
      
      <a href=${
        process.env.BASE_URL +
        "/email-verification/" +
        user._id +
        "/" +
        verificationString 
      }>confirm email</a>
      <p>This link will expire in 1hour. If you have questions, <a>we’re here to help.</a></p>`,
    });
    
    res.status(200).json({user});
    console.log("user",user)
    
  } catch (err) {
    const errors = handleErrors(err);
    res.send({ errors });
  }
}));


router.get("/email-verification/:userId/:verificationString", expressAsyncHandler(async (req, res) => {
  const { userId, verificationString} = req.params;
  
  if (!userId || !verificationString)
    return sendError(res, "invalid request,missing parameters");

   //checking if id is valid mongoDB id
  if (!isValidObjectId(userId))
  return sendError(res, "invalid request,missing parameters");

  const user = await authModel.findById(userId);
  if (!user) return sendError(res, "sorry user not found");

  if (user.verified) return sendError(res, "This account is already been verified");

  const userToken = await userEmailConfirmation.findOne({ userId: user._id });
  if (!userToken)
    return sendError(res, "The email verification link is invalid");

  const verifyUniqueString = await userToken.verifyUniqueString(verificationString);
  if (!verifyUniqueString)
    return sendError(res, "The email verification link is invalid ");

  await authModel.updateOne({ _id: user._id }, { verified: true });
  
   await userEmailConfirmation.findByIdAndDelete(userToken._id);

  mailTransport().sendMail({
    from: process.env.AUTH_EMAIL,
    to: user.email,
    subject: "Email Successfully verified",
    html: `<p>Email verified Successfully.Thanks for connecting with us.</p>`,
  });

  res.json("your email is verified");
  // console.log("your email is verified");
}));


router.post("/signin",expressAsyncHandler(async(req, res) => {
  const { email, password } = req.body;

  if (!email) return sendError(res, "Enter your email");

  if (!password) return sendError(res, "Enter your password");

  try {
    const user = await authModel.login(email, password);

    const token = createToken(user);

    
    res.status(200).send({
      id:user._id,
      firstName:user.firstName,
      email:user.email,
      isAdmin:user.isAdmin,
      token,
      });
  } catch (err) {
    const errors = handleErrors(err);
    res.send({ errors });
  }
}));



router.get("/:id",requireAuth,expressAsyncHandler(async(req,res)=>{
     const user = await authModel.findById(req.params.id);
     if(user){
       res.send(user)
     }else{
       res.status(404).send({message:"User Not found"})
     }
}));


router.put("/profile",requireAuth,expressAsyncHandler(async(req,res)=>{
  const user = await authModel.findById(req.user.id);
  if(user){
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email =req.body.email || user.email;
  if(req.body.password){
    user.password = req.body.password.trim() ;
  }
  const updatedUser = await user.save();
  const token = createToken(updatedUser);
  res.send({
     id:updatedUser._id,
     firstName:updatedUser.firstName,
     lastName:updatedUser.lastName,
     email:updatedUser.email,
     isAdmin:updatedUser. isAdmin,
     token
     })
  }
  

  
}))






router.post("/forget-password", async (req, res) => {
  const { email } = req.body;
  // res.json(req.body);
  if (!email) return sendError(res, "Enter your email");

  const user = await authModel.findOne({ email });
  if (!user) return sendError(res, "sorry user not found");

  const userToken = await resetPassword.findOne({ userId: user._id });
  if (userToken)
    return sendError(
      res,
      " only after one hour before you can request another one "
    );

  const uniqueToken = uuidv4() + user._id;
  const resetPasswordToken = await resetPassword.create({
    userId: user._id,
    uniqueToken: uniqueToken,
  });

  mailTransport().sendMail({
    from: process.env.AUTH_EMAIL,
    to: user.email,
    subject: "Password Reset",
    html: `<p>Someone just requested to change your shop Now account's password. If this was you, click on the link below to reset it.</p>
        <a href=${
          process.env.BASE_URL +
          "/reset-password?uniqueToken=" +
          uniqueToken +
          "&id=" +
          user._id
        }>reset password</a>
          This link will expire within 2 hours.
    
      <p>If you don't want to reset your credentials, just ignore this message and nothing will be changed</p>`,
  });
  res.status(200).json("password reset link as been sent Successfully");
});


router.post("/reset-password", isResetTokenValid, async (req, res) => {
  const { password } = req.body;

  const user = await authModel.findById(req.user._id);
  if (!user) return sendError(res, "sorry user not found");

  const isSamePassword = await user.comparePassword(password);
  if (isSamePassword) return sendError(res, "use a new password");

//resetting the password
  user.password = password.trim();
  await user.save();
  
//removing reset token from the database
  await resetPassword.findOneAndDelete({ userId: user._id });

  mailTransport().sendMail({
    from: process.env.AUTH_EMAIL,
    to: user.email,
    subject: "Successful password reset",
    html: `
    <p>Your password reset has been successful</p>
    <p>Now you can login your account with your new password.</p>`,
  });
  res.send({ success: true, message: "password reset successful" });
});


router.get("/verify-resetToken", isResetTokenValid, (req, res) => {
  res.status(200).json({ success: true });
});


export default router;
