import Image from "next/image";

export default function ViewGallery() {
  return (
    <div className="px-4 bg-secondary py-8 md:grid md:grid-cols-3 md:gap-4 md:p-4">
      {/* Image 1 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-4.jpg"
          alt="Photo from Circle of Intimacy 2024"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-5.jpg"
          alt="Circle of Intimacy 2024 gallery image"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-0 pb-[100%] mb-4 md:mb-0">
        <Image
          src="/coi-gallery-3.jpg"
          alt="Praise and worship from Circle of Intimacy 2024"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 4 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-1.jpg"
          alt="Circle of Intimacy 2024 gallery image"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 5 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-2.jpg"
          alt="Circle of Intimacy 2024 gallery image"
          fill
          className="object-cover "
        />
      </div>

      {/* Image 6 */}
      <div className="relative w-full h-0 pb-[100%] hidden md:block">
        <Image
          src="/coi-gallery-6.jpg"
          alt="Circle of Intimacy 2024 gallery image"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
}
