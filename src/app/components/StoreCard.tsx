import Image from "next/image";
import Button from "./button";

interface Props {
  imageURL: string;
  firstImage: boolean;
}

export default function StoreCard({ imageURL, firstImage }: Props) {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={imageURL}
        alt="store image"
        width={500}
        height={600}
        className="absolute w-full h-full z-0 object-cover md:object-fit"
      />
      <div className="relative z-10 w-full h-full ">
        {firstImage ? (
          <h1 className="z-10 text-black absolute top-3 right-10 text-lg w-40 ">
            CRAFTING UNIQUE NARRATIVES THROUGH CHRIST
          </h1>
        ) : (
          <h1 className="z-10 text-black absolute top-3 left-4 text-xl w-52  ">
            ANYTHING IS POSSIBLE THROUGH HIM
          </h1>
        )}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full md:px-8 px-2">
          <Button size={[22, 2]} text="SHOP NOW" url="/store" />
        </div>
      </div>
    </div>
  );
}
