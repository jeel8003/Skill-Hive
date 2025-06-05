import e, { json } from "express";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

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

export const logout=async (req,res)=>{
    try {
        //give me code
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        
        console.error("Error in logout:", error);
        res.status(500).json({ success:false,message: "Internal server error" });
    }
}

export const getUserProfile=async (req,res)=>{
    try {
        //give me code
        const userID=req.id;
        const user=await User.findById(userID).select("-password");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        return res.status(200).json({
            success:true,
            user
        });
    } catch (error) {
        //code
        console.error("Error in getUserProfile:", error);
        res.status(500).json({ success:false,message: "Internal server error" });
    }
}

export const updateProfile = async (req,res) => {
    try {
        const userId = req.id;
        const {name} = req.body;
        const profilePhoto = req.file;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false
            }) 
        }
        // extract public id of the old image from the url is it exists;
        if(user.photoUrl){
            const publicId = user.photoUrl.split("/").pop().split(".")[0]; // extract public id
            deleteMediaFromCloudinary(publicId);
        }

        // upload new photo
        const cloudResponse = await uploadMedia(profilePhoto.path);
        const photoUrl = cloudResponse.secure_url;

        const updatedData = {name, photoUrl};
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new:true}).select("-password");

        return res.status(200).json({
            success:true,
            user:updatedUser,
            message:"Profile updated successfully."
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to update profile"
        })
    }
}