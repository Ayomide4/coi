"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, FormEvent } from "react";

export default function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<string>(""); // Store as string to prevent premature conversions
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const numericAmount = parseFloat(amount); // Convert to a number
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid donation amount.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false); // Reset success state

    try {
      // Create a PaymentIntent on the server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: numericAmount }), // Convert to cents
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create PaymentIntent.");
      }

      const { clientSecret } = await response.json();

      // Confirm the payment on the client side
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        setError("Card element not found.");
        setLoading(false);
        return;
      }

      const { error: stripeError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        },
      );

      if (stripeError) {
        setError(stripeError.message || "An error occurred.");
        setLoading(false);
        return;
      }

      // Payment succeeded
      setSuccess(true);
      setAmount(""); // Reset the input field after a successful donation
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Custom styles for the CardElement
  const cardElementOptions = {
    style: {
      base: {
        color: "#ffffff",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#a0aec0",
        },
      },
      invalid: {
        color: "#e53e3e",
        iconColor: "#e53e3e",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block font-medium mb-2">Donation Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setSuccess(false); // Reset success state when the amount changes
          }}
          className="w-full p-2 border rounded text-black"
          min="1"
          step="1" // Allows decimal input
          placeholder="Enter amount"
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

      {success && (
        <p className="text-green-500 mb-4">
          Your payment was successfully sent
        </p>
      )}
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
