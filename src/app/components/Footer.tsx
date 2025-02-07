"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-foreground w-full md:w-full p-5  md:m-0 md:flex md:flex-col md:items-center ">
      <div className=" p-4 w-full flex  flex-col md:flex-row items-center md:justify-between lg:w-4/5">
        <div className="w-52 relative h-44 hidden md:block ">
          <Image
            src="coi-logo.svg"
            alt="Circle of Intimacy Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl mb-2 md:mb-4 text-nowrap ">
            CIRCLE OF INTIMACY
          </h1>
          <div className=" grid grid-cols-2 gap-4 md:w-full md:grid-cols-3 ">
            <div className="">
              <h2 className="font-semibold text-2xl ">About</h2>
              <Link href="/about#mission">
                <p className="text-xl font-light">Mission</p>
              </Link>
              <Link href="/about#team">
                <p id="team" className="text-xl font-light">
                  Team
                </p>
              </Link>
            </div>
            <div className="">
              <h2 className="font-semibold text-2xl">Support Us</h2>
              <Link href="https://cash.app/$CircleOfIntimacy1" target="_blank">
                <p className="text-xl font-light">Donate</p>
              </Link>
              <a
                href="mailto:sikeomotosho@gmail.com"
                className="text-xl font-light"
              >
                Contact
              </a>
            </div>
            <div className="">
              <h2 className="font-semibold text-2xl">Social</h2>
              <Link
                href="https://www.instagram.com/circleofintimacy/"
                target="_blank"
              >
                <p className="text-xl font-light">Instagram</p>
              </Link>
              <Link
                href="https://www.youtube.com/@sikemiomotosho"
                target="_blank"
              >
                <p className="text-xl font-light">Youtube</p>
              </Link>
            </div>
            <div className="w-full relative h-32 md:hidden">
              <Image
                src="coi-logo.svg"
                alt="Circle of Intimacy Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="block md:hidden">
            Designed and Created by{" "}
            <a href="mailto:info@lonestarwebstudio.com" target="_blank">
              <span className="underline">Lone Star Web Studio</span>
            </a>
          </p>
        </div>
      </div>
      <div className="md:px-4 w-full ">
        <div className="border-b-2 border-textColor w-full my-4"></div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">
            © {currentYear} COI. All rights reserved.
          </p>
          <p className="hidden md:block">
            Designed and Created by{" "}
            <a href="mailto:info@lonestarwebstudio.com" target="_blank">
              <span className="underline">Lone Star Web Studio</span>
            </a>
          </p>

          <div
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <p className="mr-2 font-bold">Back to top</p>
            <Image
              src="arrowUp.svg"
              width={25}
              height={25}
              alt="arrow up"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
