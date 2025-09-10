"use client";

import React from "react";
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

const WA_PHONE = "56979643558"; // +56 9 7964 3558 normalizado
const WA_TEXT = encodeURIComponent("Hola, me gustaría agendar una sesión.");
const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_TEXT}`;

// Tipado estricto para fbq
type FBQ = (
  method: "track" | "trackCustom",
  eventName: string,
  params?: Record<string, unknown>,
  options?: { eventID?: string }
) => void;

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

export function SymptomsSection() {
  const handleWhatsAppClick = () => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;

    const eventID =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;

    window.fbq(
      "trackCustom",
      "WsEnviado",
      {
        destination: "whatsapp",
        phone: WA_PHONE,
        page: typeof window !== "undefined" ? window.location.pathname : "/",
      },
      { eventID }
    );
    // No prevenimos la navegación: el <a> abre WhatsApp en nueva pestaña
  };

  return (
    <section
      className="relative py-16 px-6 sm:px-12 lg:px-32 bg-[#215d4c] dark:bg-[#2a2a2a]"
      aria-labelledby="symptoms-intro-title"
    >
      {/* Degradado superior: violeta a verde */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#676EAB] to-[#215d4c] dark:bg-[#2a2a2a] z-0 pointer-events-none" />

      {/* Degradado inferior: verde a #e6d5c8 */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#e6d5c8] to-[#215d4c] dark:bg-[#2a2a2a] z-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-16">
        {/* Intro agregado */}
        <div className="text-center">
          <h2
            id="symptoms-intro-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white dark:text-[#e5e5e5]"
          >
            ¿Sientes que últimamente te cuesta disfrutar de lo que antes te hacía bien?
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-white/95 dark:text-[#e5e5e5]/95">¿Que tu cabeza no descansa?</p>
          <p className="text-lg sm:text-xl text-white/95 dark:text-[#e5e5e5]/95">
            ¿Que no tienes control sobre lo que te pasa?
          </p>

          <div className="mx-auto mt-6 max-w-3xl text-left sm:text-center">
            <p className="text-white/90 dark:text-[#e5e5e5]/90 leading-relaxed">
              La ansiedad y la depresión pueden sentirse como un torbellino que arrasa con tu vida. No solo viven en tu
              mente: también afectan a tu cuerpo, tus relaciones y la forma en que te miras a ti mism@.
            </p>
            <p className="mt-4 text-white/90 dark:text-[#e5e5e5]/90 leading-relaxed">
              Puede que intentes seguir adelante, en modo piloto automático, pero en el fondo sabes que algo no anda bien.
            </p>
          </div>
        </div>

        {/* Ansiedad */}
        <div>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full dark:rounded-md border border-white/20 dark:border-[#555] bg-white/10 dark:bg-[#333] px-3 py-1 text-xs font-medium text-white dark:text-[#e5e5e5]">
              — Según el Instituto Nacional de la Salud Mental —
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white dark:text-[#e5e5e5]">
              Señales comunes de ansiedad
            </h2>
            <p className="mt-3 text-white/90 dark:text-[#e5e5e5]/90">
              Si te identificas con varias de estas señales, puede ser un buen momento para buscar apoyo profesional.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {anxietySymptoms.map((symptom, index) => (
              <li
                key={`anx-${index}`}
                className="flex items-start gap-3 rounded-2xl dark:rounded-md bg-white dark:bg-[#333] ring-1 ring-emerald-100 dark:ring-[#555] p-5 shadow-sm dark:shadow-none"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full dark:rounded-md bg-[#e6d5c8] dark:bg-[#555] text-[#676EAB] dark:text-[#e5e5e5] ring-1 ring-[#dbc8bb] dark:ring-[#666]">
                  <CheckCircle className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-800 dark:text-[#e5e5e5]">{symptom}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Depresión */}
        <div>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full dark:rounded-md border border-white/20 dark:border-[#555] bg-white/10 dark:bg-[#333] px-3 py-1 text-xs font-medium text-white dark:text-[#e5e5e5]">
              — Según la Asociación Americana de Psicología —
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white dark:text-[#e5e5e5]">
              Señales comunes de depresión
            </h2>
            <p className="mt-3 text-white/90 dark:text-[#e5e5e5]/90">
              Aunque cada persona lo vive de forma distinta, estas señales pueden indicar que algo no está bien. Si te
              identificas con varias, puede ser un buen momento para buscar apoyo profesional.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {depressionSymptoms.map((symptom, index) => (
              <li
                key={`dep-${index}`}
                className="flex items-start gap-3 rounded-2xl dark:rounded-md bg-white dark:bg-[#333] ring-1 ring-emerald-100 dark:ring-[#555] p-5 shadow-sm dark:shadow-none"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full dark:rounded-md bg-[#e6d5c8] dark:bg-[#555] text-[#676EAB] dark:text-[#e5e5e5] ring-1 ring-[#dbc8bb] dark:ring-[#666]">
                  <CheckCircle className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-800 dark:text-[#e5e5e5]">{symptom}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Invitación final */}
        <div className="text-center mt-6 sm:mt-10">
          <p className="text-white/95 dark:text-[#e5e5e5]/95 text-lg sm:text-xl">
            Pero… ¿qué pasa si te digo que puedes elegir cómo vivir?
          </p>
          <div className="mx-auto mt-4 max-w-3xl space-y-3 text-white/90 dark:text-[#e5e5e5]/90 leading-relaxed">
            <p>
              No me malinterpretes: no puedes controlar el cambio climático, el tráfico de la ciudad, cómo reaccionan las
              personas, lo que piensen de ti o los imprevistos que interrumpen tu día.
            </p>
            <p>Lo que sí puedes elegir es cómo afrontarlo. Y no tienes por qué hacerlo sol@.</p>
            <p>
              Porque de eso se trata la terapia: de acompañarte en este proceso, paso a paso, hasta que vuelvas a sentir
              calma, confianza y ligereza en tu vida.
            </p>
            <p>Tu día a día puede (y merece) ser disfrutado. Vivir de manera plena y tranquila sí es una opción.</p>
            <p>Y estás a un click de dar el primer paso. ¿List@ para empezar?</p>
          </div>

          {/* Botón: dispara WsEnviado y abre WhatsApp */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label="Abrir WhatsApp para agendar primera sesión"
            className="mt-6 inline-flex items-center justify-center rounded-2xl dark:rounded-md bg-[#e6d5c8] dark:bg-[#555] px-6 py-3 font-semibold text-[#215d4c] dark:text-[#e5e5e5] shadow-sm dark:shadow-none ring-1 ring-[#dbc8bb] dark:ring-[#666] hover:shadow-md dark:hover:shadow-none hover:bg-[#ecdccd] dark:hover:bg-[#666] transition-colors"
          >
            👉 Agendar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}