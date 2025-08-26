import React from "react";
import { CalendarCheck, MessageCircle, HeartHandshake } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Agenda tu primera sesión",
    description:
      "El primer paso es tomar la decisión. El valor es de $30.000 e incluye un espacio personalizado para ti.",
    icon: <CalendarCheck className="w-8 h-8 text-[#6871a9]" />,
  },
  {
    title: "Conversemos sobre cómo te sientes",
    description:
      "Durante la sesión podrás expresarte con tranquilidad sobre lo que estás atravesando.",
    icon: <MessageCircle className="w-8 h-8 text-[#6871a9]" />,
  },
  {
    title: "Te acompaño paso a paso",
    description:
      "Trabajaremos juntos, a tu ritmo, en un entorno seguro, empático y sin juicios.",
    icon: <HeartHandshake className="w-8 h-8 text-[#6871a9]" />,
  },
];

export function StepsSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-32 bg-[#ede0d6]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2a2a2a] mb-6">
          ¿Cómo empezar el proceso?
        </h2>
        <p className="text-[#3f3f3f] mb-12">
          Iniciar terapia puede parecer difícil, pero está pensado para ser
          claro, accesible y acompañado desde el primer momento.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-sm ring-1 ring-[#e6d5c8] hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#2a2a2a] mb-2">
                {step.title}
              </h3>
              <p className="text-[#4b4b4b] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}