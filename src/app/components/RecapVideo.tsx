"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function RecapVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null); // Explicitly typed as HTMLVideoElement

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="h-screen relative overflow-hidden  ">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
        aria-label="A recap video from Circle of Intimacy 2024"
      >
        <source src="/coi-recap.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
