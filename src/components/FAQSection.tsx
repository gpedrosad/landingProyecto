// components/FAQSection.tsx
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

  const toggle = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="bg-white py-16 px-4 sm:px-12 lg:px-32">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-gray-800 font-medium">
                {item.question}
              </span>
              <span className="text-gray-500 transform transition-transform duration-300"
                    style={{
                      transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                +
              </span>
            </button>
            <div
              className={`px-4 pt-0 overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "max-h-40 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}