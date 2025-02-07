"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, FormEvent } from "react";

export default function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<number>(10); // Default donation amount
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create a PaymentIntent on the server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment on the client side
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        setError("Card element not found.");
        setLoading(false);
        return;
      }

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });

      if (stripeError) {
        setError(stripeError.message || "An error occurred.");
        setLoading(false);
        return;
      }

      // Payment succeeded
      alert(`Payment successful! ID: ${paymentIntent?.id}`);
      setLoading(false);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Custom styles for the CardElement
  const cardElementOptions = {
    style: {
      base: {
        color: "#ffffff", // White text color
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#a0aec0", // Placeholder text color
        },
      },
      invalid: {
        color: "#e53e3e", // Red text color for invalid input
        iconColor: "#e53e3e", // Red icon color for invalid input
      },
    },
  };

  //FIX: fix how much is donated
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block font-medium mb-2">Donation Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded text-black"
          min="1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Card Details</label>
        <CardElement
          className="p-2 border rounded"
          options={cardElementOptions}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Donate"}
      </button>
    </form>
  );
}
