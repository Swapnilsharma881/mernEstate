import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.MONGO).then(
  ()=> {
    console.log("Connected TO mongoDB");
  }
).catch(
  (err) =>{
    console.log("Error From Database", err);
  }
)

const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
