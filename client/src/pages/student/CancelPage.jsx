import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { XCircle } from "lucide-react";

export const CancelPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract courseId from query params
  const params = new URLSearchParams(location.search);
  const courseId = params.get("courseId");

  const courseDetailUrl = courseId ? `/course-detail/${courseId}` : "/";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 dark:bg-red-900">
      <XCircle className="text-red-600 dark:text-red-400" size={64} />
      <h1 className="mt-6 text-3xl font-bold text-red-700 dark:text-red-300">
        Payment Cancelled
      </h1>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-200">
        Your payment was cancelled. You can try again anytime.
      </p>
      <Button
        className="mt-8 text-lg"
        variant="outline"
        onClick={() => navigate(courseDetailUrl)}
      >
        Back to Course
      </Button>
    </div>
  );
};

export default CancelPage;
