"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-foreground w-full p-5 md:m-0 md:flex md:flex-col md:items-center">
      <div className="p-4 w-full flex flex-col md:flex-row items-center md:justify-between lg:w-4/5 max-w-full">
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <div className="relative w-40 h-32">
            <Image
              src="/coi-logo.svg"
              alt="Circle of Intimacy Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full max-w-[320px] sm:max-w-none">
          <h1 className="font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-nowrap text-left">
            CIRCLE OF INTIMACY
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* About */}
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">About</h2>
              <Link href="/about#mission">
                <p className="text-lg sm:text-xl font-light">Mission</p>
              </Link>
              <Link href="/about#team">
                <p className="text-lg sm:text-xl font-light">Team</p>
              </Link>
            </div>

            {/* Support Us */}
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">Support Us</h2>
              <Link href="/give">
                <p className="text-lg sm:text-xl font-light">Donate</p>
              </Link>
              <a
                href="mailto:sikeomotosho@gmail.com"
                className="text-lg sm:text-xl font-light"
              >
                Contact
              </a>
            </div>

            {/* Social */}
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">Social</h2>
              <Link
                href="https://www.instagram.com/circleofintimacy/"
                target="_blank"
              >
                <p className="text-lg sm:text-xl font-light">Instagram</p>
              </Link>
              <Link
                href="https://www.youtube.com/@sikemiomotosho"
                target="_blank"
              >
                <p className="text-lg sm:text-xl font-light">YouTube</p>
              </Link>
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="w-full flex justify-center mt-4 md:hidden">
            <div className="relative w-28 h-24">
              <Image
                src="/coi-logo.svg"
                alt="Circle of Intimacy Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="block md:hidden text-center mt-2">
            Designed and Created by{" "}
            <a href="mailto:info@lonestarwebstudio.com" target="_blank">
              <span className="underline">Lone Star Web Studio</span>
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full md:px-4 max-w-full">
        <div className="border-b-2 border-textColor w-full my-4"></div>
        <div className="flex flex-wrap justify-between items-center gap-2 text-center md:text-left">
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
              src="/arrowUp.svg"
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
