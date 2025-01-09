'use client'
import Image from "next/image";
import Button from "./button";
import { toast } from "react-toastify";
import CountdownDisplay from "./Countdown";

export default function EventCountdown() {
  //TODO:  add countdown and registration link
  const notify = () => toast("Registration will open soon!");
  return (
    <div className="px-4 bg-background py-4 w-full min-h-[900px] relative ">
      <h1 className="text-5xl font-bold text-center">
        A NIGHT WHERE <span className="text-primary">WORSHIP</span> MEETS{" "}
        <span className="text-primary">TRUTH.</span>
      </h1>
      <div className="w-full min-h-[700px] relative flex flex-col items-center mt-6">
        <div className="absolute top-32 w-5/6 h-[400px] ">
          <Image
            src="/assets/coi-footer-3.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-40 h-80">
          <Image
            src="/assets/coi-footer-1.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-44 h-72">
          <Image
            src="/assets/coi-footer-2.jpg"
            fill
            alt="image from circle of intimacy 2024"
            className="object-cover"
          />
        </div>
      </div>

      {/* <h1 className="text-4xl font-bold text-center my-5">
        191 days until the event
      </h1> */}
      <CountdownDisplay/>
      <div onClick={notify}>
        <Button
          size={[22, 2.5]}
          text="Register Now"
          color="bg-backgroundGreen"
        />
      </div>
    </div>
  );
}
