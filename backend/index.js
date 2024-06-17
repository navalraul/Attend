import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Login, Register } from "./Controllers/User.controller";

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();


app.post("/register", Register)

app.post("/login", Login)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to DB")
}).catch((error)=> {
    console.log("Error in mongoDb", error)
})

app.listen(8000, ()=>{
    console.log("Server running on port 8000")
})
