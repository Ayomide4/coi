import Image from "next/image";

export default function ViewGallery() {
  return (
    <div className="px-4 bg-secondary py-8 md:grid md:grid-cols-3 md:gap-4 md:p-4">
      {/* Image 1 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-4.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-5.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-3.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 4 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-1.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 5 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-2.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 6 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-6.jpg"
          alt="group photo"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
}
