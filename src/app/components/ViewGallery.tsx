import Image from "next/image";
import Button from "./button";
export default function ViewGallery() {
  return (
    <div className="px-4 space-y-4 bg-secondary py-8 ">
      <div className="relative w-full aspect-square ">
        <Image
          src="/assets/coi-gallery-4.jpg"
          alt="group photo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-square">
        <Image
          src="/assets/coi-gallery-5.jpg"
          alt="group photo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-square">
        <Image
          src="/assets/coi-gallery-3.jpg"
          alt="group photo"
          fill
          className="object-cover"
        />
      </div>

      {/* <Button size={[22, 2.5]} text="VIEW GALLERY" />  */}
    </div>
  );
}
