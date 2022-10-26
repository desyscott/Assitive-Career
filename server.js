import  express from "express";
import colors  from "colors";
import dotenv  from "dotenv";
import cors  from "cors";
import morgan  from "morgan";
import cookieParser  from "cookie-parser";
import path from 'path';
import multer from 'multer';
import fs from "fs";

const app = express();


import {requireAuth}  from "./middleware/authMiddleware.js";
import uploadModel from "./models/uploadModel.js"

import authRoute  from "./routes/authRoute.js";
import orderRouter from "./routes/orderRouter.js";
import coursesRouter from "./routes/coursesRouter.js";
import chartsRouter from "./routes/chartsRouter.js";
import usersRouter from "./routes/usersRouter.js";

import connectDB  from "./db.js";


dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
const __dirname = path.resolve();



app.use("/api/auth",authRoute);
app.use("/api/charts",chartsRouter);
app.use("/api/courses",coursesRouter);
app.use("/api/users",usersRouter);
app.use("/api/orders",requireAuth,orderRouter);


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), async(req, res) => {
  const image=req.file.path
 
  
  const fileUpload= new uploadModel({
   image:image,
  })
  const newUser = await fileUpload.save();
  if(newUser){
    res.send({data:fs.readFileSync("uploads/" + req.file.filename)});
  }else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
 
});








if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"Client-Side/build")));
  
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Client-Side","build","index.html"))
  })
}else{
  app.get("/",(req,res)=>{
    res.send("Api running")
  })
}


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
