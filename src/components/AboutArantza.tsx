"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutArantza() {
  return (
    <section className="relative w-full" style={{ backgroundColor: "#bbb491" }}>
      {/* Degradado inferior: #bbb491 a violeta */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#676EAB] to-[#bbb491] z-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-10 sm:py-14">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative h-24 w-[260px] sm:h-20 sm:w-[320px]">
            <Image
              src="/logo1.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
              sizes="320px"
            />
          </div>
        </div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-6 text-xl sm:text-2xl font-extrabold tracking-tight text-white"
        >
          HOLA, SOY ARANTZA
        </motion.h1>

        {/* Subtítulo */}
        <p className="mt-3 text-[15px] leading-relaxed text-white/90">
          Psicóloga clínica · Enfoque humano, basado en evidencia y libre de juicios.
        </p>

        {/* Contenido (párrafos justificados) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="about-rich mt-6 space-y-4 text-[15px] leading-relaxed text-white/95"
        >
          <p>
            Mi interés por la salud mental comenzó mucho antes de mi formación
            académica: nació de la necesidad de entenderme y sanarme. Crecí con
            un trastorno ansioso-depresivo que marcó mi infancia y adolescencia.
          </p>
          <p>
            Fui una niña ansiosa, llena de inseguridades y miedos. Fui una
            adolescente que lidió con episodios depresivos y una dura relación
            consigo misma.
          </p>
          <p>
            Con el tiempo, ese recorrido personal se transformó en un propósito:
            aprender a acompañar, comprender y sostener el dolor ajeno. Así nació
            mi decisión de formarme como psicóloga y especializarme en temáticas
            como la ansiedad y la depresión; áreas que conozco no solo desde la
            teoría y la práctica profesional, sino también desde mi propia historia.
          </p>
          <p>
            Hoy mi compromiso es ofrecerte un espacio seguro, humano y libre de
            juicios —el verdadero “escuchamos, pero no juzgamos”—, donde podamos
            trabajar en lo que necesitas. Lo hacemos a tu ritmo y con herramientas
            adaptadas a tu forma única de vivir y sentir, nunca al revés.
          </p>

          {/* Frase */}
          <blockquote className="mt-6 rounded-xl bg-white/15 px-4 py-3 text-white border border-white/25">
            <p className="font-medium">
              No es magia; es un trabajo colaborativo y con propósito.
            </p>
          </blockquote>
        </motion.div>

        {/* Estilos locales: justificado y guiones automáticos */}
        <style jsx>{`
          .about-rich p {
            text-align: justify;
            text-justify: inter-word;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
          }
        `}</style>
      </div>
    </section>
  );
}