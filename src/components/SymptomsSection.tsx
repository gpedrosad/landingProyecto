import { CheckCircle } from "lucide-react";

const symptoms = [
  "Sientes que tu mente no se detiene",
  "Te cuesta disfrutar lo que antes te gustaba",
  "Te levantas sin energía ni motivación",
  "Te preocupas por todo, incluso sin razón clara",
  "Evitas planes o personas por ansiedad o agotamiento",
];

export function SymptomsSection() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          ¿Te identificas con alguno de estos pensamientos?
        </h2>
        <p className="text-gray-600 mb-10">
          A veces no sabemos cómo explicarlo, pero lo sentimos profundamente. Estas son señales de que algo necesita atención.
        </p>

        <ul className="text-left space-y-4">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <span className="text-lg">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}