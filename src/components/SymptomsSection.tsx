import { CheckCircle } from "lucide-react";

const symptoms = [
  "Sensación de inquietud, tensión o nerviosismo.",
  "Problemas para dormir.",
  "Dificultad para concentrarse.",
  "Fatiga, irritabilidad o tensión muscular.",
  "Sensación constante de que algo malo va a pasar y no poder detener ese pensamiento.",
];

export function SymptomsSection({
  backgroundClass = "bg-gradient-to-b from-emerald-50 via-white to-white",
}: {
  /** Tailwind classes para el fondo de la sección */
  backgroundClass?: string;
}) {
  return (
    <section className={`${backgroundClass} py-16 px-6 sm:px-12 lg:px-32`}>
      <div className="mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            — según el Instituto Nacional de la Salud Mental —
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Señales comunes de ansiedad
          </h2>
          <p className="mt-3 text-zinc-600">
            Si te identificás con varias de estas señales, puede ser buen
            momento para buscar apoyo profesional.
          </p>
        </div>

        {/* Lista estética */}
        <ul className="mt-10 grid gap-4">
          {symptoms.map((symptom, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5"
            >
              <span className="mt-1 inline-grid place-items-center rounded-full bg-emerald-50 p-1.5 ring-1 ring-emerald-200">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </span>
              <p className="text-[15px] leading-relaxed text-zinc-700">
                {symptom}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}