import { CheckCircle } from "lucide-react";

const anxietySymptoms = [
  "Sensación de inquietud, tensión o nerviosismo.",
  "Problemas para dormir.",
  "Dificultad para concentrarse.",
  "Fatiga, irritabilidad o tensión muscular.",
  "Sensación constante de que algo malo va a pasar y no poder detener ese pensamiento.",
];

const depressionSymptoms = [
  "Desánimo persistente.",
  "Cambios significativos en el peso.",
  "Fatiga o falta de energía.",
  "Sentimientos de culpa o inutilidad.",
  "Dificultad para concentrarse o tomar decisiones.",
  "Pensamientos sobre la muerte o el suicidio.",
];

export function SymptomsSection({
  /** Clases Tailwind para el fondo (verde → blanco) */
  backgroundClass = "bg-gradient-to-b from-emerald-50 via-white to-white",
}: {
  backgroundClass?: string;
}) {
  return (
    <section className={`${backgroundClass} py-16 px-6 sm:px-12 lg:px-32`}>
      <div className="mx-auto max-w-4xl space-y-16">
        {/* ───────────── Ansiedad ───────────── */}
        <div>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              — según el Instituto Nacional de la Salud Mental —
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
              Señales comunes de ansiedad
            </h2>
            <p className="mt-3 text-zinc-600">
              Si te identificas con varias de estas señales, puede ser un buen momento para buscar apoyo profesional.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {anxietySymptoms.map((symptom, index) => (
              <li
                key={`anx-${index}`}
                className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-emerald-100 p-5 shadow-sm"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                  <CheckCircle className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-800">{symptom}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────────── Depresión ───────────── */}
        <div>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              — según la Asociación Americana de Psicología —
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
              Señales comunes de depresión
            </h2>
            <p className="mt-3 text-zinc-600">
              Aunque cada persona lo vive de forma distinta, estas señales pueden indicar que algo no está bien. Si te
              identificas con varias, puede ser un buen momento para buscar apoyo profesional.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {depressionSymptoms.map((symptom, index) => (
              <li
                key={`dep-${index}`}
                className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-emerald-100 p-5 shadow-sm"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                  <CheckCircle className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-800">{symptom}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}