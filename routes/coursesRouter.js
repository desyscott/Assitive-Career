import express from "express";
import {data} from '../data/CourseData.js'
import expressAsyncHandler from "express-async-handler"
import productModel from "../models/productModel.js";

const coursesRouter = express.Router();


//get all the courses
// coursesRouter.get("/",  expressAsyncHandler(async(req, res) => {
//     const courses=await productModel.find({});
//     res.send(courses)
// }));
coursesRouter.get("/",  expressAsyncHandler(async(req, res) => {
    res.send(data.courses)
}));



//create all the courses
coursesRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
      // await productModel.remove({});
  const createdCourse = await productModel.insertMany(data.courses)
  res.send({createdCourse})
}))

//get individual courses
coursesRouter.get("/:id",expressAsyncHandler(async(req, res) => {
  const course = await productModel.findById(req.params.id)
  if(course){
    res.send(course)
  }else{
    res.status(404).send({message:"course Not Found"})
  }
}));

export default coursesRouter;