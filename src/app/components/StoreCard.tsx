import Image from "next/image";
import Link from "next/link";

interface Props {
  imageURL: string;
  firstImage: boolean;
}

export default function StoreCard({ imageURL, firstImage }: Props) {
  return (
    <div className="relative h-[600px] w-full lg:h-[800px] 2xl:h-[1000px]">
      <Image
        src={imageURL}
        alt="Circle of Intimacy merchandise"
        width={500}
        height={600}
        className="absolute w-full h-full z-0 object-cover lg:object-cover "
      />
      <div className="relative z-10 w-full h-full ">
        {firstImage ? (
          <h1 className="z-10 text-black absolute top-3 right-10 text-lg w-40 md:right-3 lg:text-2xl lg:w-80 lg:right-4 ">
            CRAFTING UNIQUE NARRATIVES THROUGH CHRIST
          </h1>
        ) : (
          <h1 className="z-10 text-black absolute top-3 left-4 text-xl w-52 lg:text-2xl  lg:left-auto lg:right-4 lg:w-fit ">
            ANYTHING IS POSSIBLE THROUGH HIM
          </h1>
        )}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full md:px-8 px-2">
          <Link
            href="https://www.zeffy.com/en-US/ticketing/coi-merch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-primary text-2xl 2xl:text-3xl w-full md:p-2 cursor-pointer hover:bg-primary/95"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
