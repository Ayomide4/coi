"use client";
import Image from "next/image";
import Button from "./button";
import CountdownDisplay from "./Countdown";

export default function EventCountdown() {
  return (
    <div className="px-4 bg-background py-4 w-full min-h-[900px] relative flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center md:mt-10">
        A NIGHT WHERE <span className="text-primary">WORSHIP</span> MEETS{" "}
        <span className="text-primary">TRUTH.</span>
      </h1>
      <div className="w-full min-h-[700px] relative flex flex-col items-center mt-6  2xl:min-h-[1000px] 2xl:mb-40">
        <div className="absolute top-32 w-5/6 h-[400px] md:w-3/4 lg:w-2/3 2xl:h-full ">
          <Image
            src="/coi-footer-3.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-40 h-80 md:w-60 md:right-10 lg:right-12 lg:w-64 2xl:h-3/4 2xl:w-[500px]">
          <Image
            src="/coi-footer-1.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-44 h-72 md:left-10 md:bottom-10 md:w-60 lg:w-64 lg:h-80 lg:bottom-8 2xl:h-3/4 2xl:w-[500px] 2xl:-bottom-60">
          <Image
            src="/coi-footer-2.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
      </div>

      <CountdownDisplay />
      <div className="w-full md:flex md:items-center md:justify-center">
        <div className="w-full md:w-96 md:self-center cursor-pointer ">
          <Button
            size={[22, 2.5]}
            text="REGISTER NOW"
            color="bg-backgroundGreen"
            url="https://www.zeffy.com/en-US/ticketing/circle-of-intimacy-worship-experience"
          />
        </div>
      </div>
    </div>
  );
}
