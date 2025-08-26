"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "¿Qué sucede en la primera sesión?",
    answer:
      "Hablaremos de tus inquietudes y objetivos. Es un espacio para conocernos y entender cómo puedo acompañarte.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer: "Cada encuentro tiene una duración aproximada de 50 minutos.",
  },
  {
    question: "¿Con qué frecuencia debo asistir?",
    answer:
      "Generalmente recomendamos sesiones semanales, aunque podemos ajustar la frecuencia según tu necesidad.",
  },
  {
    question: "¿Cómo sé si la terapia es para mí?",
    answer:
      "Si sientes estrés, ansiedad, tristeza prolongada o necesitas un espacio para procesar emociones, la terapia puede ayudarte.",
  },
  {
    question: "¿Es confidencial lo que comento?",
    answer:
      "Absolutamente. Todo lo que compartas queda protegido por la confidencialidad profesional.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section
      className="relative pt-40 pb-40 px-4 sm:px-12 lg:px-32"
      style={{ backgroundColor: "#215d4c" }}
    >
      {/* Degradado superior hacia #ede0d6 */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-[#215d4c] to-[#ede0d6] pointer-events-none z-0" />

      {/* Degradado inferior hacia #6571ac */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-[#215d4c] to-[#6571ac] pointer-events-none z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-white/10 transition"
                >
                  <span className="text-white font-medium">{item.question}</span>
                  <span
                    className="text-white/90 transform transition-transform duration-300 text-xl leading-none select-none"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-20 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-white/90">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}