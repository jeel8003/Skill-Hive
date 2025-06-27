import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract courseId from query params
  const params = new URLSearchParams(location.search);
  const courseId = params.get("courseId");

  // Fallback: if no courseId, go to home or a default page
  const courseDetailUrl = courseId ? `/course-detail/${courseId}` : "/";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 dark:bg-green-900">
      <CheckCircle className="text-green-600 dark:text-green-400" size={64} />
      <h1 className="mt-6 text-3xl font-bold text-green-700 dark:text-green-300">
        Payment Successful!
      </h1>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-200">
        Thank you for your purchase. You are now enrolled in the course.
      </p>
      <Button
        className="mt-8 text-lg"
        onClick={() => navigate(courseDetailUrl)}
      >
        Go to Course
      </Button>
    </div>
  );
};

export default SuccessPage;
