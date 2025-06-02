import express from "express";
import dotenv from "dotenv";
import connectDb  from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});
connectDb()

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));



//apis

const PORT=process.env.PORT;
app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

})