import { CalendarCheck, MessageCircle, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "Agenda tu primera sesión",
    description: "El primer paso es tomar la decisión. El valor es de $30.000 e incluye un espacio personalizado para ti.",
    icon: <CalendarCheck className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Conversemos sobre cómo te sientes",
    description: "Durante la sesión podrás expresarte con tranquilidad sobre lo que estás atravesando.",
    icon: <MessageCircle className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Te acompaño paso a paso",
    description: "Trabajaremos juntos, a tu ritmo, en un entorno seguro, empático y sin juicios.",
    icon: <HeartHandshake className="w-8 h-8 text-indigo-600" />,
  },
];

export function StepsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          ¿Cómo empezar el proceso?
        </h2>
        <p className="text-gray-600 mb-12">
          Iniciar terapia puede parecer difícil, pero está pensado para ser claro, accesible y acompañado desde el primer momento.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}