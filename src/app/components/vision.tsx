import Image from "next/image";
import vision from "../../../public/assets/vision.png"
import Button from "./button";

export default function Vision() {
  return (
    <div className="relative">
        <div className="h-[80vh] relative">
            <Image 
                src={vision} 
                alt="vision" 
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 bg-black/20 ">
                <h1 className="text-center text-4xl text-white mb-6">OUR VISION</h1>
                <p className="text-center text-2xl text-white mb-4 max-w-4xl">
                Our vision is to see a generation pursuing Jesus, living as His dwelling place, boldly sharing the gospel, and carrying His love to the world.
                </p>
                <p className="text-center text-2xl text-white max-w-4xl mb-10">
                To inspire intimacy with Jesus by fostering worship, prayer, and obedience, helping people find purpose and fulfillment in Him. A Space to experience Gods undiluted presence.
                </p>

            <Button size={[22, 3]} text="LEARN MORE" />
            </div>
        </div>
    </div>
  );
}