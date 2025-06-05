import express from "express"
import {register,login, getUserProfile,logout, updateProfile} from "../controllers/user.controllers.js" 
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
const router=express.Router();
console.log("routes before")
router.route("/register").post(register);
console.log("routes after")
router.route("/logout").get(logout)
router.route("/login").post(login);
router.route("/profile/update").put(isAuthenticated,upload.single("profilePhoto"),updateProfile);

router.route("/profile").get(isAuthenticated,getUserProfile)

export default router;