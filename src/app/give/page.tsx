"use client";
// pages/donate.js
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonationForm from "../components/DonationForm";

// Load Stripe.js with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function DonatePage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-24">
        Support Our Mission
      </h1>
      <p className="mb-8 text-xl">
        Your donation helps us continue our work. Thank you!
      </p>
      <Elements stripe={stripePromise}>
        <DonationForm />
      </Elements>
    </div>
  );
}
