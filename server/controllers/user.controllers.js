import e, { json } from "express";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        //console.log("Register endpoint hit");
        const { name, email, password } = req.body;
        //console.log(name)
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        const hashedPassword=await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password:hashedPassword 
        })
        return res.status(201).json({
            success:"true",
            message: "User registered successfully"
        })
    }

    catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const  login=async (req,res)=>{
    try {
        console.log("Login endpoint hit", req.body);
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            });
        }
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }
        
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        
        // generateToken already sends the response, so we return it directly
        return generateToken(res, user, `Welcome back ${user.name}`);
        
        // Remove the following code as it creates an error
        // (trying to send a response after one has already been sent)
        /*
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user
        });
        */
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}