"use client";

import React from "react";

const testimonials = [
  { name: "Ana", handle: "@ana_psico", text: "Esta terapia me ha ayudado a encontrar paz interior." },
  { name: "Luis", handle: "@luis89", text: "Nunca pensé que podría hablar tan abiertamente sobre mis emociones." },
  { name: "María", handle: "@maria.a", text: "Me siento mucho más segura de mí misma después de las sesiones." },
  { name: "Carlos", handle: "@carlos_psy", text: "Cada encuentro me acerca más a mi mejor versión." },
  { name: "Sofía", handle: "@sofia23", text: "Gracias por enseñarme a gestionar mi ansiedad día a día." },
];

export function TestimonialsMarquee() {
  return (
    <div className="relative bg-gray-50 py-8">
      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50" />

      {/* Contenedor scroll */}
      <div className="overflow-x-hidden">
        <div className="inline-block animate-marquee space-x-6 whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="inline-block bg-white rounded-xl shadow-md p-6 w-64 h-42 flex-shrink-0 flex flex-col justify-between overflow-hidden whitespace-normal"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm break-words">
                  {t.text}
                </p>
              </div>
              {/* Si quisieras agregar un pequeño pie de tarjeta, lo pondrías aquí */}
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}