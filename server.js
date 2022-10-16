import  express from "express";
import fileUpload from "express-fileupload"
import colors  from "colors";
import dotenv  from "dotenv";
import cors  from "cors";
import morgan  from "morgan";
import cookieParser  from "cookie-parser";
import expressAsyncHandler from "express-async-handler"
import path from 'path';

const app = express();


import {requireAuth}  from "./middleware/authMiddleware.js";

import authRoute  from "./routes/authRoute.js";
import orderRouter from "./routes/orderRouter.js";
import coursesRouter from "./routes/coursesRouter.js";
import chartsRouter from "./routes/chartsRouter.js";

import connectDB  from "./db.js";


dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
const __dirname = path.resolve();





//file upload
app.post("/api/upload",expressAsyncHandler(async(req,res)=>{
 if(req.files===null){
   return res.status(400).json({msg:"No file uploaded"})
 }
 
 const file = req.files.file;
 console.log(file.name)
 
 file.mv(`${__dirname}/client-side/public/uploads/${file.name}`,(err)=>{
   if(err){
     console.error(err);
    return res.status(500).send(err);
   }
   
   res.json({fileName:file.name, filePath:`/uploads/${file.name}`})
 })
}));


app.use("/api/auth",authRoute);
app.use("/api/charts",chartsRouter);
app.use("/api/courses",coursesRouter);
app.use("/api/orders",requireAuth,orderRouter);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client-Side/build"));
}


app.get("/api/paypal/config",(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})

const PORT = process.env.PORT || 5000;
const HOSTNAME = "0.0.0.0";

//Always the port must be the first parameter
app.listen(PORT, HOSTNAME, () => {
  console.log(
    `Express server is running in the ${process.env.NODE_ENV} mode at http://${HOSTNAME}:${PORT} 🚀`
      .yellow.bold
  );
});
