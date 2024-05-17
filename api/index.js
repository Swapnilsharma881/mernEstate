import { Console } from "console";
import { captureRejectionSymbol } from "events";
import express from "express";

const app = express()
const port = 300;


app.listen(port,()=>{
    console.log("Server is running on ${port}")
})