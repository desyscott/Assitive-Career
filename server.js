import  express from "express";
import fileUpload from "express-fileupload"
import colors  from "colors";
import dotenv  from "dotenv";
import cors  from "cors";
import morgan  from "morgan";
import cookieParser  from "cookie-parser";

const app = express();


import {requireAuth}  from "./middleware/authMiddleware.js";

import authRoute  from "./routes/authRoute.js";
import orderRouter from "./routes/orderRouter.js";
import coursesRouter from "./routes/coursesRouter.js";

import connectDB  from "./db.js";


dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(fileUpload());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());


app.use("/api/auth",authRoute);
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
