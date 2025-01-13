import Image from "next/image";
import coi_bg from "../../public/assets/coi-bg.jpg";
import { Dela_Gothic_One, Sora } from "next/font/google";
import Button from "./components/button";
import Quote from "./components/quote";
import Vision from "./components/vision";
import RecapVideo from "./components/RecapVideo";
import StoreCard from "./components/StoreCard";
import ViewGallery from "./components/ViewGallery";
import EventCountdown from "./components/EventCountdown";
import { ToastContainer } from "react-toastify";

const headingFont = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
});

//TODO: FIX BUTTON SIZING

export default function Home() {
  return (
    <div className={`m-0 p-0 text-textColor`}>
      {/* Header Section */}
      <div className="w-full h-[70vh] lg:h-[95vh] relative flex items-center">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        {/* Header Content */}
        <div className="relative z-20 flex flex-col w-full items-center justify-center text-center">
          <h2 className={`${sora.className} text-4xl text-white`}>
            Join us for
          </h2>
          <h1
            className={`${headingFont.className} text-5xl font-bold tracking-tighter text-white 2xl:text-7xl`}
          >
            CIRCLE OF INTIMACY
          </h1>
          <h1
            className={`${headingFont.className} font-extrabold text-6xl tracking-tighter bg-gradient-to-r from-[#9EDCD7] from-80% to-[#2A847C] text-transparent bg-clip-text 2xl:text-8xl`}
          >
            2025
          </h1>

          <div className="mt-10 w-72 md:w-72 2xl:w-96">
            <Button size={[22, 3]} text="LEARN MORE" url="/about" />
          </div>
        </div>

        {/* Background Image */}
        <Image
          src={coi_bg}
          alt="people worshiping inside a church"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 100vw"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Other Sections */}
      <Quote />
      <Vision />
      <RecapVideo />
      <div className="hidden text-3xl md:flex flex-col w-full items-center p-10">
        <div className="bg-background items-center justify-center md:flex w-fit">
          <h2 className="w-fit font-inter mr-2">
            Celebrate your <span className="text-accent">faith</span>
          </h2>
          <Image
            src="/assets/diamond.svg"
            alt="diamond svg"
            width={10}
            height={10}
          />
          <h2 className="ml-2">
            <span className="text-accent">Expressed</span>
          </h2>
        </div>
        <h2 className="w-fit font-inter">in your own terms</h2>
      </div>
      <div className="lg:flex">
        <StoreCard imageURL="/assets/store-img-1.jpg" firstImage={true} />
        <StoreCard imageURL="/assets/store-img-2.jpg" firstImage={false} />
      </div>
      <ViewGallery />
      <EventCountdown />
      <ToastContainer />
    </div>
  );
}
