"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import TeamMemberModal from "./TeamMemberModal";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  contactInfo?: string;
}

interface Props {
  team: TeamMember[];
}

export default function TeamCarousel({ team }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, [team]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault(); // Prevent text selection
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity (multiplier)
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleImageClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const renderImages = team.map((member) => (
    <div id="team" key={member.name} className="min-w-[280px] mx-2">
      <div
        className="w-[280px] h-[300px] md:w-[400px] md:h-[440px] relative overflow-hidden cursor-pointer"
        onClick={() => handleImageClick(member)}
      >
        <Image
          src={member.imageUrl || "/placeholder.jpg"}
          alt={`Image of ${member.name}`}
          className="w-full h-full object-cover"
          fill
          draggable={false}
        />
        <div className="text-left mt-2  py-1 px-2 bg-[#151D1C] opacity-90 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[95%]">
          <h3 className="text-xl md:text-2xl font-semibold m-0 p-0">
            {member.name}
          </h3>
          <p className="text-gray-400 -mt-1 md:text-lg">{member.role}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div
        className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{ userSelect: "none" }} // Prevents text selection
      >
        <div className="inline-flex">{renderImages}</div>
      </div>
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={selectedMember}
      />
    </>
  );
}
