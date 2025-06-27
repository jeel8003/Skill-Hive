// routes/purchaseCourse.route.js
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCheckoutSession, confirmEnrollment, getAllPurchasedCourse, getCourseDetailWithPurchaseStatus } from "../controllers/coursePurchase.controllers.js";

const router = express.Router();

router.route("/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/confirm-enrollment").post(isAuthenticated, confirmEnrollment); 
router.route("/course/:courseId/detail-with-status").get(isAuthenticated, getCourseDetailWithPurchaseStatus);
router.route("/").get(isAuthenticated, getAllPurchasedCourse);

export default router;
