import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  born?: string;
  raised?: string;
  imagePosition?: string;
  email?: string;
  phone?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export default function TeamMemberModal({ isOpen, onClose, member }: Props) {
  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 text-left"
      onClick={onClose}
    >
      <div
        className="bg-[#151D1C] p-6 rounded-lg max-w-md w-full mx-4 transform transition-transform duration-300 scale-100 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64">
          <Image
            src={member.imageUrl}
            alt={`Image of ${member.name}, Circle of Intimacy team member`}
            className="object-cover rounded-t-lg"
            fill
            style={{ objectPosition: member.imagePosition || "center" }} // Use custom position if available
          />
        </div>
        <h3 className="text-2xl font-semibold mt-4 ">{member.name}</h3>
        <p className="text-gray-400 text-lg ">{member.role}</p>
        {/* {member.born && ( */}
        {/*   <p className="mt-2"> */}
        {/*     <span className="font-semibold">Born:</span> {member.born} */}
        {/*   </p> */}
        {/* )} */}
        {/* {member.raised && ( */}
        {/*   <p className="mt-1"> */}
        {/*     <span className="font-semibold">Raised:</span> {member.raised} */}
        {/*   </p> */}
        {/* )} */}
        {/* {member.phone && ( */}
        {/*   <p className="mt-2"> */}
        {/*     <span className="font-bold">Phone:</span> {member.phone} */}
        {/*   </p> */}
        {/* )} */}
        {member.email && (
          <p className="mt-1">
            <span className="font-bold">Email:</span> {member.email}
          </p>
        )}
        <p className="mt-2 text-left">{member.description}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#081211] text-white px-4 py-2 rounded hover:bg-[#0a1a19] transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}
