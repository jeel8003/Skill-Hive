import express from "express"
import {register,login} from "../controllers/user.controllers.js" 
const router=express.Router();
console.log("routes before")
router.route("/register").post(register);
console.log("routes after")
router.route("/login").post(login);

export default router;