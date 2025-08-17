"use client";

import React from "react";
import { HolographicCard } from "../components/holographic-card"; // adjust path as needed

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export function FlipCard({
  frontContent,
  backContent,
  className = "",
}: FlipCardProps) {
  return (
    <HolographicCard
      className={`${className} group perspective-1000 cursor-pointer`}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180 group-hover:scale-105">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">{frontContent}</div>

        {/* Back Side */}
        <div className="absolute inset-0 rotate-x-180 backface-hidden bg-AAprimary bg-opacity-80 p-6 text-gray-300 overflow-auto rounded-3xl">
          <h1>Back-Content</h1>
        </div>
      </div>
    </HolographicCard>
  );
}
