import Image from "next/image";
import Button from "./button";

export default function Vision() {
  return (
    <div className="relative md:bg-secondary h-[100vh] md:h-[80vh] lg:flex lg:items-center lg:justify-center lg:h-[70vh]">
      <div className="relative h-full md:w-full md:p-10 lg:px-20 lg:py-0 lg:h-full 2xl:w-4/6 2xl:p-0">
        <div className=" absolute inset-0 bg-black opacity-20 z-10"></div>

        <Image src="/kneel.jpg" alt="vision" fill className="object-cover" />

        <div className=" relative z-10 flex flex-col items-center justify-center h-full p-8  md:items-start md:w-96 md:bg-none md:p-0 2xl:w-full lg:w-1/2">
          <h1 className="text-center text-4xl text-white  md:text-left 2xl:text-6xl">
            OUR VISION
          </h1>
          <div className="flex flex-col py-5 h-1/2 mb-10 ">
            <p className="text-center text-xl text-white mb-8 max-w-4xl md:text-lg lg:text-2xl md:text-left 2xl:text-3xl  ">
              Our vision is to see a generation pursuing Jesus, living as His
              dwelling place, boldly sharing the gospel, and carrying His love
              to the world.
            </p>
            <p className="text-center text-xl text-white max-w-4xl md:text-lg lg:text-2xl md:text-left 2xl:text-3xl  ">
              To inspire intimacy with Jesus by fostering worship, prayer, and
              obedience, helping people find purpose and fulfillment in Him. A
              Space to experience God&apos;s undiluted presence.
            </p>
          </div>
          <div className="w-full md:w-60 lg:w-80 xl:w-96">
            <Button size={[22, 3]} text="LEARN MORE" url="/about" />
          </div>
        </div>
      </div>
    </div>
  );
}
