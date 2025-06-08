import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoute from "./routes/course.route.js"
import mediaRoute from "./routes/media.route.js"
dotenv.config({});
connectDb();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Fix the CORS configuration
app.use(cors({
    origin: "http://localhost:5173", // Replace with the exact origin of your client
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// APIs
const PORT = process.env.PORT;
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("api/v1/media",mediaRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});