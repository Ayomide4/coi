"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface Props {
  team: TeamMember[];
}

export default function TeamCarousel({ team }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, [team]); // Adjust if the team array changes
  const renderImages = team.map((member) => (
    <div id="team" key={member.name} className="min-w-[280px] mx-2">
      <div className="w-[280px] h-[300px] relative overflow-hidden rounded-lg">
        <Image
          src={member.imageUrl || "/placeholder.jpg"}
          alt={`Image of ${member.name}`}
          className="w-full h-full object-cover"
          fill
        />
        <div className="text-left mt-2 rounded-lg py-1 px-2 bg-[#151D1C] opacity-90 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[95%]">
          <h3 className="text-xl font-semibold m-0 p-0">{member.name}</h3>
          <p className="text-gray-400 -mt-1">{member.role}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="overflow-x-auto whitespace-nowrap scrollbar-hide"
      ref={carouselRef}
    >
      <div className="inline-flex">{renderImages}</div>
    </div>
  );
}