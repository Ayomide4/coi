import Image from "next/image";
import Head from "next/head";
import coi_bg from "../../public/coi-bg.jpg";
import { Rubik, Staatliches } from "next/font/google";
import Quote from "./components/quote";
import Vision from "./components/vision";
import RecapVideo from "./components/RecapVideo";
import StoreCard from "./components/StoreCard";
import ViewGallery from "./components/ViewGallery";
import EventCountdown from "./components/EventCountdown";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";


const newHeading = Staatliches({
  subsets: ["latin"],
  weight: "400"
}
)

const body = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
}
)

const dates = (
  <div className="hidden lg:block md:absolute bottom-32 right-10 z-20 space-y-2">
    <div className={`${newHeading.className} justify-between hidden md:flex rounded bg-white text-black text-lg xl:text-2xl w-48 xl:w-64 p-2`}><p>FRIDAY</p><p>6:00 pm-11:00pm</p></div>
    <div className={`${newHeading.className} justify-between hidden md:flex rounded border border-white text-lg xl:text-2xl bg-inherit text-white w-48 xl:w-64 p-2`}><p>SATURDAY</p><p>5:30 pm-11:00pm</p></div>
  </div>
)

export default function Home() {
  return (
    <div className={`m-0 p-0 text-textColor`}>
      {/* Header Section */}
      <Head>
        <title>Join us for Circle Of Intimacy</title>
        <meta
          name="description"
          content="Inspiring intimacy with Jesus through worship, prayer, and obedience. Find purpose and fulfillment in Him. A space to experience God's undiluted presence. Join us!"
        />
      </Head>
      <div className="w-full h-[90vh] lg:h-[95vh] relative flex items-center">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        {/* Header Content */}
        <div className="z-20 px-4 absolute bottom-20  flex flex-col lg:w-fit  items-start justify-center  md:absolute lg:bottom-32 lg:left-12">
          <h1
            className={`${newHeading.className}  text-6xl md:text-8xl font-normal  text-white 2xl:text-7xl`}
          >
            CIRCLE OF <span className={`${newHeading.className}  bg-gradient-to-r from-[#9EDCD7] from-80% to-[#2A847C] text-transparent bg-clip-text `}>INTIMACY</span>
          </h1>

          <h2 className={`${body.className} mt-4  text-xl md:text-3xl lg:text-4xl text-wrap lg:w-[42rem] mb-10 font-medium text-white 2xl:text-7xl`} >The home of faceless men. Knowing Christ and making him known</h2>
          <Link href="https://www.zeffy.com/en-US/ticketing/circle-of-intimacy-worship-experience" target="_blank">
            <button className={`${newHeading.className} bg-primary w-52 h-12 xl:w-64 xl:h-16 rounded text-3xl hover:bg-primary/95 shadow-lg transition-all transform hover:scale-105`}>REGISTER</button>
          </Link>
        </div>

        {dates}

        {/* Background Image */}
        <Image
          src={coi_bg}
          alt="People worshiping at the Circle of Intimacy event"
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
          <Image src="/diamond.svg" alt="diamond svg" width={10} height={10} />
          <h2 className="ml-2">
            <span className="text-accent">Expressed</span>
          </h2>
        </div>
        <h2 className="w-fit font-inter">in your own terms</h2>
      </div>
      <div className="lg:flex">
        <StoreCard imageURL="/store-img-1.jpg" firstImage={true} />
        <StoreCard imageURL="/store-img-2.jpg" firstImage={false} />
      </div>
      <ViewGallery />
      <EventCountdown />
      <Analytics />
    </div>
  );
}
