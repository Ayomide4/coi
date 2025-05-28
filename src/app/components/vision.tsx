
import Image from "next/image";
import Button from "./button"; // Assuming Button component is correctly imported

export default function Vision() {
  return (
    <div className="relative min-h-[100vh] md:min-h-[80vh] lg:flex lg:items-center lg:justify-center lg:h-[70vh]">
      {/* This parent div for the image and text overlay */}
      <div className="relative h-full w-full md:p-10 lg:px-20 lg:py-0 2xl:p-0">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <Image
          src="/kneel.jpg"
          alt="Man worshiping at Circle of Intimacy event"
          fill
          className="object-cover" // Removed w-full as fill + object-cover handles it
        />


        <div className="relative z-10 flex h-full flex-col items-center justify-center   p-8  md:p-0">
          {/* Heading: text-center ensures its text is centered. */}
          <h1 className="text-center text-4xl text-white lg:text-5xl">
            OUR VISION
          </h1>

          {/* Container for paragraph and button:
              - Uses flex-col and items-center to stack and horizontally center the paragraph and button.
              - py-5 for vertical padding.
              - Removed h-1/2 and mb-10 to allow parent's justify-center to work correctly.
          */}
          <div className="flex flex-col items-center py-5">
            {/* Paragraph: text-center ensures its text is centered. mb-8 for spacing. */}
            <p className="mb-8 max-w-4xl text-center text-3xl text-white lg:text-4xl ">
              Our vision is to see a global revival breakout and spread across
              the earth through this ministry. A movement led by faceless men
              who find their identity in Christ and yearn to only glorify God.
            </p>
            {/* Button container: Spacing from paragraph is handled by p's mb-8 and this div's mt. */}
            <div className="mt-10 w-full md:w-60 lg:w-80 xl:w-96 lg:mt-20">
              <Button size={[22, 3]} text="LEARN MORE" url="/about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

