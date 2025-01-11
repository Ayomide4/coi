"use client";
import { useState } from "react";
import Image from "next/image";

export default function TeamImage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  // Calculate the position as a percentage
  const getObjectPosition = () => {
    switch (currentIndex) {
      case 0:
        return "0% center";
      case 1:
        return "50% center";
      case 2:
        return "100% center";
      default:
        return "50% center";
    }
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden  md:mt-10">
      <Image
        src="/assets/coi-team1.jpg"
        alt="image of people worshiping"
        className="object-cover transition-all duration-500"
        style={{ objectPosition: getObjectPosition() }}
        fill
        priority
      />

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <Image
          src="/assets/caret-left.svg"
          width={15}
          height={20}
          alt="arrow right"
          className=""
        />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/75 text-white p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <Image
          src="/assets/caret.svg"
          width={15}
          height={20}
          alt="arrow right"
        />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
