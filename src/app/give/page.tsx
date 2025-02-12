"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonationForm from "../components/DonationForm";
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
throw new Error(
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Please add it to your environment variables.'
);
}

const stripePromise = loadStripe(
process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function DonatePage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-24">
        Support Our Mission
      </h1>
      <p className="mb-8">
        Your donation helps us continue our work. Thank you!
      </p>
      <Elements stripe={stripePromise}>
        <DonationForm />
      </Elements>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Donate</h2>
        <p className="mb-2">You can also support us via CashApp or Zelle:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://cash.app/$CircleOfIntimacy1"
            className="text-blue-500 hover:text-blue-700  "
            target="_blank"
            rel="noopener noreferrer"
          >
            CashApp
          </a>
          <span>|</span>
          <a
            href="https://enroll.zellepay.com/qr-codes?data=CnsKICAgICJ0b2tlbiI6ICJjaXJjbGVvZmludGltYWN5QGdtYWlsLmNvbSIsCiAgICAibmFtZSI6ICJDaXJjbGUgT2YgSW50aW1hY3kgTWluaXN0cmllcyIsCiAgICAiYWN0aW9uIjogInBheW1lbnQiCn0="
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zelle
          </a>
        </div>
      </div>
    </div>
  );
}
