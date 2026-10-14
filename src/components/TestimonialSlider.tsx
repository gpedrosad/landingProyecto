// components/TestimonialSlider.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { sectionFade } from "./sectionFade";

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

// Tiempo de lectura por slide: ~60ms por carácter, entre 8 y 40 segundos
const readingTime = (text: string) => Math.min(40_000, Math.max(8_000, text.length * 60));

function TestimonialContent({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-center">
      <span aria-hidden className="block h-6 sm:h-8 font-serif text-5xl sm:text-6xl leading-none text-[#676EAB]/35 select-none">
        “
      </span>
      <blockquote className="mt-1 sm:mt-2 space-y-3 sm:space-y-4 text-[15px] leading-6 sm:text-[17px] sm:leading-8 text-zinc-700 dark:text-[#e5e5e5] text-pretty">
        {t.text.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      <figcaption className="mt-5 sm:mt-6 flex items-center gap-3 border-t border-zinc-200/70 dark:border-[#555] pt-4 sm:pt-5">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full bg-[#215d4c] dark:bg-[#555] font-semibold text-white"
        >
          {t.name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-[#215d4c] dark:text-[#e5e5e5]">{t.name}</span>
          <span className="block text-xs text-zinc-500 dark:text-[#e5e5e5]/70">Testimonio</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Slider de testimonios.
 *
 * La tarjeta toma la altura del testimonio más largo (todos se renderizan
 * invisibles en la misma celda de la grilla), así no salta ni necesita scroll
 * interno. En móvil se puede deslizar con el dedo. El autoplay da tiempo según
 * el largo del texto, se pausa con hover y se detiene al interactuar.
 *
 * Props:
 * - background: color de fondo de la sección (default: '#676EAB').
 */
export default function TestimonialSlider({ background = "#676EAB" }: { background?: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 izq, 1 der
  const [paused, setPaused] = useState(false);
  const [userControlled, setUserControlled] = useState(false);
  const reduceMotion = useReducedMotion();

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
  const takeControl = (action: () => void) => () => {
    setUserControlled(true);
    action();
  };

  const t = TESTIMONIALS[index];

  // autoplay
  useEffect(() => {
    if (paused || userControlled || reduceMotion) return;
    const id = setTimeout(next, readingTime(t.text));
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, userControlled, reduceMotion]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -24 : 24, opacity: 0 }),
    }),
    []
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (swipe < -60) takeControl(next)();
    else if (swipe > 60) takeControl(prev)();
  };

  const arrowClass =
    "grid size-11 shrink-0 place-items-center rounded-full dark:rounded-md bg-[#e6d5c8] dark:bg-[#555] text-[#215d4c] dark:text-[#e5e5e5] shadow dark:shadow-none ring-1 ring-white/40 dark:ring-[#666] transition hover:bg-white active:scale-95 dark:hover:bg-[#666]";

  return (
    <section
      className="section-fade relative w-full py-20 px-4 text-zinc-900 dark:text-[#e5e5e5]"
      style={{
        backgroundColor: background,
        ...sectionFade(background, {
          top: { color: "#bbb491" },
          bottom: { color: "#215d4c", space: "oklch" },
        }),
      }}
      aria-roledescription="carrusel"
      aria-label="Testimonios"
    >
      <div
        className="mx-auto max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Card */}
        <motion.article
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing overflow-hidden rounded-3xl dark:rounded-md bg-white/95 dark:bg-[#333] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] dark:shadow-none ring-1 ring-white/60 dark:ring-[#555] px-5 py-6 sm:p-10"
        >
          <div className="grid">
            {/* Medidores invisibles: la celda toma la altura del testimonio más largo */}
            {TESTIMONIALS.map((item) => (
              <div key={item.name} aria-hidden className="invisible col-start-1 row-start-1">
                <TestimonialContent t={item} />
              </div>
            ))}

            <AnimatePresence custom={direction} mode="wait" initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="col-start-1 row-start-1"
                aria-live={userControlled ? "polite" : "off"}
              >
                <TestimonialContent t={t} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.article>

        {/* Controles */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={takeControl(prev)} aria-label="Anterior" className={arrowClass}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex items-center">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al testimonio ${i + 1}`}
                aria-current={i === index}
                onClick={takeControl(() => goTo(i))}
                className="grid h-8 place-items-center px-1.5"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-white dark:bg-[#e5e5e5]" : "w-2.5 bg-white/45 hover:bg-white/70 dark:bg-[#555]"
                  }`}
                />
              </button>
            ))}
          </div>

          <button onClick={takeControl(next)} aria-label="Siguiente" className={arrowClass}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
