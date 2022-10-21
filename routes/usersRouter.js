import express from "express";
import {data} from '../data/UsersData.js'
import expressAsyncHandler from "express-async-handler"
import authModel from "../models/authModel.js";

const usersRouter = express.Router();




usersRouter.get("/",  expressAsyncHandler(async(req, res) => {
    res.send(data.users)
}));

//get individual users
usersRouter.get("/:id",expressAsyncHandler(async(req, res) => {
  const user = data.users.find((x)=>x._id===req.params.id)
  if(user){
    res.send(user)
  }else{
    res.status(404).send({message:"user Not Found"})
  }
}));


//create all the users
// usersRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
//       // await authModel.remove({});
//   const createdUsers = await authModel.insertMany(data.users)
//   res.send({createdUsers})
// }))

//get all the users
// usersRouter.get("/",  expressAsyncHandler(async(req, res) => {
//     const users=await authModel.find({});
//     res.send(courses)
// }));


//get individual user
// usersRouter.get("/:id",expressAsyncHandler(async(req, res) => {
//   const user = await authModel.findById(req.params.id)
//   if(user){
//     res.send(user)
//   }else{
//     res.status(404).send({message:"user Not Found"})
//   }
// }));

export default usersRouter;
