import Image from "next/image";
import coi_bg from "../../public/assets/coi-bg-test.png";
import { Dela_Gothic_One, Sora } from "next/font/google";
import Button from "./components/button";
import Quote from "./components/quote";

const headingFont = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`m-0 p-0 text-textColor`}>
      <div className="w-full h-screen">
        <div className="flex flex-col w-full h-full absolute items-center justify-center">
          <h2 className={`${sora.className} text-4xl`}>Join us for</h2>
          <h1
            className={`${headingFont.className} text-5xl font-bold text-center tracking-tighter`}
          >
            CIRCLE OF INTIMACY
          </h1>
          <h1
            className={`${headingFont.className} font-extrabold text-6xl tracking-tighter bg-gradient-to-r from-[#9EDCD7] from-80% to-[#2A847C] text-transparent bg-clip-text`}
          >
            2025
          </h1>

          <div className="mt-5">
            <Button size={[22, 3]} text="LEARN MORE" />
          </div>
        </div>

        <Image
          src={coi_bg}
          alt="people worshiping inside a church"
          className="w-full h-[calc(100%-2rem)] object-cover"
        />
      </div>
      <Quote />
    </div>
  );
}
