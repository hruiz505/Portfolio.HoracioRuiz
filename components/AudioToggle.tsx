"use client";

import { Volume2, VolumeX } from "lucide-react";

interface AudioToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

export default function AudioToggle({
  isPlaying,
  onToggle,
  className = "",
}: AudioToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      aria-pressed={isPlaying}
      className={`flex items-center justify-center border border-white p-2 text-white transition-colors hover:bg-white hover:text-black ${className}`}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
