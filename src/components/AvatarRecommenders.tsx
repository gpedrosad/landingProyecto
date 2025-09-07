// components/AvatarRecommenders.tsx
"use client";

import React from "react";

const avatarUrls = [
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=28",
  "https://i.pravatar.cc/150?img=5",
];

export function AvatarRecommenders() {
  return (
    <div className="py-8 bg-[linear-gradient(to_bottom,#ede0d6_0%,#ede0d6_90%,#215d4c_100%)] dark:bg-[#2a2a2a]">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Avatares solapados */}
        <div className="flex -space-x-3">
          {avatarUrls.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Avatar ${idx + 1}`}
              className="h-10 w-10 rounded-full dark:rounded-md ring-2 ring-white dark:ring-[#555] object-cover"
            />
          ))}

          {/* Contador extra */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full dark:rounded-md bg-white/70 dark:bg-[#555] text-sm font-medium text-gray-700 dark:text-[#e5e5e5] ring-2 ring-white dark:ring-[#555]">
            +99
          </div>
        </div>

        {/* Texto debajo de los avatares */}
        <p className="font-medium text-center text-[#2a2a2a] dark:text-[#e5e5e5]">
          Recomiendan el tratamiento
        </p>
      </div>
    </div>
  );
}