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
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        
        {/* Avatares solapados */}
        <div className="flex -space-x-3">
          {avatarUrls.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Avatar ${idx + 1}`}
              className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            />
          ))}

          {/* Contador extra */}
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600 ring-2 ring-white">
            +99
          </div>
        </div>

        {/* Texto debajo de los avatares */}
        <p className="text-gray-700 font-medium text-center">
          Recomiendan el tratamiento
        </p>
      </div>
    </div>
  );
}