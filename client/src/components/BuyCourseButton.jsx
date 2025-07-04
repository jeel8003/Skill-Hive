import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Your publishable key

export const BuyCourseButton = ({ courseId }) => {
  const [
    createCheckoutSession,
    { data, error, isLoading, isSuccess, isError },
  ] = useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession(courseId);
  };

  useEffect(() => {
    if (isSuccess) {
      if (data?.id) {
        // Redirect to Stripe Checkout
        const redirectToCheckout = async () => {
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({
            sessionId: data.id
          });
        };
        redirectToCheckout();
      } else {
        toast.error("Invalid response from server.");
      }
    }

    if (isError) {
      toast.error(
        error?.data?.message || "Failed to create checkout session."
      );
    }
  }, [isSuccess, isError, error, data]);

  return (
    <Button
      disabled={isLoading}
      onClick={purchaseCourseHandler}
      className="w-full cursor-pointer"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Please wait..
        </>
      ) : (
        "Purchase Course"
      )}
      
    </Button>
  );
};
