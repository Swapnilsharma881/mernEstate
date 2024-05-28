//importing Essential Modules
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

//Hiding Credential Using .env 
dotenv.config();
//Connects mongoDb To Server
mongoose.connect(process.env.MONGO).then(
  ()=> {
    console.log("Connected TO mongoDB");
  }
).catch(
  (err) =>{
    console.log("Error From Database", err);
  }
);
//Complete

//Creating Server
const app = express();
const port = process.env.PORT || 5000;
//Complete

//root endpoint
app.use('/api/user', userRouter)

//Complete



//Server is running on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//Completeapp.use('/api/user', userRouter)
