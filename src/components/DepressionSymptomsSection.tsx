import { CheckCircle } from "lucide-react";

const symptoms = [
  "Desánimo persistente.",
  "Cambios significativos en el peso.",
  "Fatiga o falta de energía.",
  "Sentimientos de culpa o inutilidad.",
  "Dificultad para concentrarse o tomar decisiones.",
  "Pensamientos sobre la muerte o el suicidio.",
];

export function DepressionSymptomsSection({
  // ahora parte en blanco para integrarse con el bloque anterior
  backgroundClass = "bg-gradient-to-b from-white via-white to-emerald-50 dark:bg-[#2a2a2a]",
}: {
  /** Tailwind classes para el fondo de la sección */
  backgroundClass?: string;
}) {
  return (
    <section className={`${backgroundClass} py-16 px-6 sm:px-12 lg:px-32`}>
      <div className="mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full dark:rounded-md border border-emerald-200 dark:border-[#555] bg-emerald-50 dark:bg-[#333] px-3 py-1 text-xs font-medium text-emerald-700 dark:text-[#e5e5e5]">
            — según la Asociación Americana de Psicología —
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-[#e5e5e5]">
            Señales comunes de depresión
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-[#e5e5e5]/90">
            Aunque cada persona la vive de forma distinta, estas señales pueden
            indicar que algo no está bien. Si te identificás con varias, puede
            ser buen momento para buscar apoyo profesional.
          </p>
        </div>

        {/* Lista estética (sin animaciones) */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {symptoms.map((symptom, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-2xl dark:rounded-md bg-white dark:bg-[#333] ring-1 ring-emerald-100 dark:ring-[#555] p-5 shadow-sm dark:shadow-none"
            >
              {/* Acento visual */}
              <div className="grid size-9 shrink-0 place-items-center rounded-full dark:rounded-md bg-emerald-50 dark:bg-[#555] text-emerald-600 dark:text-[#e5e5e5] ring-1 ring-emerald-200 dark:ring-[#666]">
                <CheckCircle className="h-5 w-5" aria-hidden />
              </div>

              {/* Texto */}
              <p className="text-[15px] leading-relaxed text-zinc-800 dark:text-[#e5e5e5]">
                {symptom}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}