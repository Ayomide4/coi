"use client";
import { useState, useEffect } from "react";

//TODO: make countdown look prettier

export default function CountdownDisplay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const eventDate = new Date(2025, 6, 11); // Month is 0-based, so 6 = July

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        // Event has passed
        setTimeLeft({ days: 0, hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center py-8 flex flex-col items-center justify-center ">
      <h1 className=" text-3xl font-bold md:text-5xl">
        Countdown to the Event:
      </h1>
      <div className="text-2xl font-semibold mt-4  flex gap-3  md:gap-6">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl md:text-5xl">{timeLeft.days}</h2>
          <span className="font-medium md:text-3xl">
            {timeLeft.days === 1 ? "Day" : "Days"}
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl md:text-5xl">{timeLeft.hours}</h2>
          <span className="font-medium  md:text-3xl">
            {timeLeft.hours === "01" ? "Hour" : "Hours"}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl">{timeLeft.minutes}</h2>
          <span className="font-medium md:text-3xl">
            {timeLeft.minutes === "01" ? "Minute" : "Minutes"}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl">{timeLeft.seconds}</h2>
          <span className="font-medium md:text-3xl">
            {timeLeft.seconds === "01" ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
}
