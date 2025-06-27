import Stripe from "stripe";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { User } from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const userId = req.id;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found.'
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.courseTitle,
              images: [course.courseThumbnail],
            },
            unit_amount: course.coursePrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/course-detail/${courseId}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/course-detail/${courseId}`,
      metadata: {
        courseId,
        userId,
      }
    });

    // Create pending purchase record
    await CoursePurchase.create({
      courseId,
      userId,
      amount: course.coursePrice,
      status: "pending",
      paymentId: session.id
    });

    return res.json({ id: session.id });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create checkout session"
    });
  }
};

export const confirmEnrollment = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const userId = req.id;

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      // Find and update purchase
      const purchase = await CoursePurchase.findOne({
        paymentId: sessionId,
        userId
      }).populate("courseId");

      if (!purchase) {
        return res.status(404).json({
          success: false,
          message: "Purchase not found"
        });
      }

      // Update purchase status
      purchase.status = "completed";
      purchase.amount = session.amount_total / 100;
      await purchase.save();

      // Enroll user in course
      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { enrolledCourses: purchase.courseId._id } }
      );

      await Course.findByIdAndUpdate(
        purchase.courseId._id,
        { $addToSet: { enrolledStudents: userId } }
      );

      return res.json({
        success: true,
        message: "Enrollment confirmed"
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Payment not completed"
      });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const getCourseDetailWithPurchaseStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const course = await Course.findById(courseId)
      .populate("creator")
      .populate("lectures");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    const purchased = await CoursePurchase.findOne({
      userId,
      courseId,
      status: "completed"
    });

    return res.status(200).json({
      success: true,
      course,
      purchased: !!purchased
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const getAllPurchasedCourse = async (req, res) => {
  try {
    const userId = req.id;

    // Find courses purchased by this user
    const purchasedCourses = await CoursePurchase.find({
      userId,
      status: "completed"
    }).populate("courseId");

    return res.status(200).json({
      success: true,
      purchasedCourses
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
