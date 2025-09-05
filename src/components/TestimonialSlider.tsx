// components/TestimonialSlider.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = {
  name: string;
  avatarUrl?: string | null; // ya no se usa, pero lo dejamos para compatibilidad
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ignacio",
    avatarUrl: null,
    text:
      "Ha sido una grata experencia, al principio un poco reacio a los resultados que pudiese tener pasar por terapias sicologicas, no era muy crédulo en esta ciencia, pero a medida que pasan las sesiones me puedo ir dando cuenta de lo equivocado que estaba, y el aporte lo vivo semana a semana, sesión a sesión, conversación a conversación, ese espacio que nos damos para hablar de cosas que uno no muchas veces puede hablar o no tiene otro punto de vista que Arantza si me lo puede dar se agradece.",
  },
  {
    name: "Valentina",
    avatarUrl: null,
    text:
      "Desde que comencé terapia con la Arantzazu me sentí cómoda, fue un acierto llegar a ella a través de una derivación. Es muy fácil hablar con ella, es una profesional muy comprometida, compasiva, y para mí lo mejor, es que es cercana, la siento como una amiga sin perder la relación profesional-consultante.\n\nEs versátil a la hora de atender, se adapta a ti y tus necesidades personales de terapia, constantemente busca la mejor forma de apoyarte en sesión.\n\nPersonalmente me ha dado muchas herramientas y conocimientos para conocerme a mi misma, aceptarme y manejar situaciones que yo pensaba imposibles de mejorar. Es una psicóloga maravillosa, me ayudo y sigue ayudándome a creer en mi y a seguir mejorando.",
  },
  {
    name: "Isidora",
    avatarUrl: null,
    text:
      "Conocí a la Ari por casualidad en un momento en que necesitaba apoyo psicológico, y que ella se haya cruzado en mi camino fue casi una sincronía. Desde la primera sesión sentí que estaba en buenas manos. Es una profesional comprometida, que escucha con atención, que estructura cada sesión con sentido y que me entrega herramientas concretas basadas en evidencia, algo que para mí hace toda la diferencia. Su forma de trabajar me hace sentir segura y acompañada.\n\nGracias a su guía he podido entender mejor lo que me pasa, aprender a manejar la ansiedad y recuperar un poco la calma. Con el pasar de las sesiones he logrado obtener claridad de las cosas que me pasan, alivio y una nueva forma de enfrentar mis días.",
  },
  {
    name: "Carla",
    avatarUrl: null,
    text:
      "En mi caso ha creado destellos de luz en un vida que solo veia ocuridad. Sabe crear un espacio cómodo y seguro donde puedes comprender y aceptar tu situación. Se ha convertido en una persona importante que además es muy empática. Sé que es un proceso largo pero ella te guia por el camino correcto. La recomiendo sin dudarlo",
  },
  // NUEVA REVIEW
  {
    name: "Alina",
    avatarUrl: null,
    text:
      "Luego de muchos psicólogos pude dar en el clavo con Arantza, me sentí acogida desde el primer día, me acompañó y ayudó durante todo mi proceso, hasta que pude sanar mis heridas, estoy muy agradecida de su labor, ya que, al fin después de años pude superar las dificultades que me estancaban en la vida.",
  },
];

/**
 * Slider de testimonios sin foto, con texto dominante y altura generosa.
 *
 * Props:
 * - background: color/gradiente CSS para el fondo (default: '#676EAB').
 * - cardHeight: altura de la tarjeta (px o string CSS, default: 520).
 */
export default function TestimonialSlider({
  background = "#676EAB",
  cardHeight = 520,
}: {
  background?: string;
  cardHeight?: number | string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 izq, 1 der

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
    }),
    []
  );

  const t = TESTIMONIALS[index];
  const cardHeightCss = typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight;

  return (
    <section className="relative w-full py-20 px-4 text-zinc-900" style={{ background }}>
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          {/* Card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.article
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ height: cardHeightCss }}
              className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_-10px_rgba(0,0,0,0.35)] ring-1 ring-zinc-200/80"
            >
              <div className="flex h-full flex-col">
                {/* Contenido principal: ocupa todo y hace scroll si es muy largo */}
                <div className="flex-1 overflow-y-auto p-8 sm:p-12">
                  <figure className="mx-auto max-w-3xl">
                    <blockquote className="text-[16px] sm:text-[17px] leading-7 sm:leading-8 text-zinc-800 whitespace-pre-line">
                      {t.text}
                    </blockquote>
                  </figure>
                </div>

                {/* Firma */}
                <div className="h-px w-full bg-zinc-200/70" />
                <div className="flex items-center justify-end px-8 py-6 sm:px-12">
                  <div className="text-right">
                    <p className="text-base font-semibold text-emerald-700">{t.name}</p>
                    <p className="text-xs text-zinc-500">Testimonio</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Controles */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="pointer-events-auto grid size-10 place-items-center rounded-full bg-[#e6d5c8] shadow ring-1 ring-zinc-200 backdrop-blur hover:bg-[#e6d5c8]/90"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="pointer-events-auto grid size-10 place-items-center rounded-full bg-[#e6d5c8] shadow ring-1 ring-zinc-200 backdrop-blur hover:bg-[#e6d5c8]/90"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al testimonio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-[#e6d5c8] ring-4 ring-[#e6d5c8]/30"
                  : "bg-white/70 ring-4 ring-white/20 hover:ring-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
