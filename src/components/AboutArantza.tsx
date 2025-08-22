"use client";

import { motion } from "framer-motion";

export default function AboutArantza() {
  return (
    <section className="relative w-full text-zinc-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-200 via-teal-100 to-white blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-sm shadow-sm p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            {/* Avatar placeholder */}
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-emerald-400/90 to-teal-400/90 text-white font-semibold shadow-inner">
              A
            </div>

            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Hola, soy <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Arantza</span> <span aria-hidden>🤍</span>
              </h1>
              <p className="mt-2 text-zinc-600">
                Psicóloga clínica · Enfoque humano, basado en evidencia y libre de juicios.
              </p>

              {/* Chips */}
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Ansiedad",
                  "Depresión",
                  "Acompañamiento sensible",
                  "Enfoque colaborativo",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-700">
            <p>
              Mi interés por la salud mental comenzó mucho antes de mi formación académica: nació de la necesidad de entenderme y sanarme. Crecí con un trastorno ansioso-depresivo que marcó mi infancia y adolescencia.
            </p>
            <p>
              Fui una niña ansiosa, llena de inseguridades y miedos. Fui una adolescente que lidió con episodios depresivos y una dura relación consigo misma.
            </p>
            <p>
              Con el tiempo, ese recorrido personal se transformó en un propósito: aprender a acompañar, comprender y sostener el dolor ajeno. Así nació mi decisión de formarme como psicóloga y especializarme en temáticas como la ansiedad y la depresión; áreas que conozco no solo desde la teoría y la práctica profesional, sino también desde mi propia historia.
            </p>
            <p>
              Hoy mi compromiso es ofrecerte un espacio seguro, humano y libre de juicios —el verdadero “escuchamos, pero no juzgamos”—, donde podamos trabajar en lo que necesitas. Lo hacemos a tu ritmo y con herramientas adaptadas a tu forma única de vivir y sentir, nunca al revés.
            </p>

            <blockquote className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-emerald-900">
              <p className="font-medium">No es magia; es un trabajo colaborativo y con propósito.</p>
            </blockquote>

            {/* Divider */}
            <div className="relative mt-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700 shadow-sm">
                FLORESCENCIA · El arte de florecer <span aria-hidden>🌱</span>
              </div>
            </div>
          </div>
        </motion.div>

  
      </div>
    </section>
  );
}
