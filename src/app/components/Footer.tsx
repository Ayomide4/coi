import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-background w-full  p-5">
      <div className="bg-foreground p-4 w-full flex  flex-col">
        <h1 className=" text-4xl mb-2 text-nowrap">CIRCLE OF INTIMACY</h1>
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="">
              <h2 className="font-semibold text-2xl">About</h2>
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
            <p className="text-xl font-light">Contact</p>
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
          <div className="w-full relative h-32">
            <Image
              src="/assets/coi-logo.svg"
              alt="Circle of Intimacy Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="border-b-2 border-textColor w-full my-4"></div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Copyright @ {currentYear}</p>
          <div className="flex items-center ">
            <p className="mr-2 font-bold">Back to top</p>
            <Link href="/">
              <Image
                src="/assets/arrowUp.svg"
                width={25}
                height={25}
                alt="arrow up"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
