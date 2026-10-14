"use client";

import React, { useState } from "react";
import { sectionFade } from "./sectionFade";

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
      className="section-fade relative pt-40 pb-40 px-4 sm:px-12 lg:px-32 bg-[#215d4c] dark:bg-[#2a2a2a]"
      style={sectionFade("#215d4c", {
        top: { color: "#ede0d6" },
        bottom: { color: "#676EAB", space: "oklch" },
      })}
    >
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-white dark:text-[#e5e5e5] text-center mb-8">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl dark:rounded-md overflow-hidden border border-white/20 dark:border-[#555] bg-white/5 dark:bg-[#333] backdrop-blur-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-white/10 dark:hover:bg-[#444] transition"
                >
                  <span className="text-white dark:text-[#e5e5e5] font-medium">{item.question}</span>
                  <span
                    className="text-white/90 dark:text-[#e5e5e5]/90 transform transition-transform duration-300 text-xl leading-none select-none"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                {/* grid-rows 0fr → 1fr anima a la altura real del contenido */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-white/90 dark:text-[#e5e5e5]/90">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}