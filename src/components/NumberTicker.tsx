// components/NumberTicker.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  target: number;
  duration?: number; // en milisegundos
  label?: string;
}

export function NumberTicker({
  target,
  duration = 2000,
  label = "personas han tomado terapia",
}: NumberTickerProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    function step(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const progress = timestamp - startTimeRef.current;
      const percent = Math.min(progress / duration, 1);
      const eased = 1 - Math.pow(1 - percent, 2);
      setCount(Math.floor(eased * target));

      if (percent < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Número con degradado y pulso */}
      <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        {count.toLocaleString()}
      </div>
      {/* Etiqueta en mayúsculas y tracking */}
      <div className="mt-3 text-sm md:text-base uppercase tracking-wider text-gray-600">
        {label}
      </div>
    </div>
  );
}