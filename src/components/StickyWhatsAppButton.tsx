// components/StickyWhatsAppButton.tsx
"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // npm i react-icons

type Props = {
  /** Número en cualquier formato; se normaliza a dígitos para wa.me */
  phone?: string; // default: +56 9 7877 1520
  /** Mensaje inicial que se prellena en WhatsApp */
  text?: string;
  /** Clases extra opcionales */
  className?: string;
  /** Mostrar solo el ícono (sin texto) */
  iconOnly?: boolean;
};

// Tipado estricto para fbq (sin any)
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

export default function StickyWhatsAppButton({
  phone = "+56 9 7964 3558",
  text = "Hola, me gustaría agendar una sesión.",
  className = "",
  iconOnly = false,
}: Props) {
  const normalized = phone.replace(/[^\d]/g, ""); // solo dígitos para wa.me
  const href = `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;

  const handleClick = () => {
    try {
      const fbq = typeof window !== "undefined" ? window.fbq : undefined;
      if (typeof fbq === "function") {
        const eventID: string =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

        fbq(
          "trackCustom",
          "WsEnviado",
          {
            destination: "whatsapp",
            phone: normalized,
            text,
            component: "StickyWhatsAppButton",
          },
          { eventID }
        );
        // Si usás CAPI, podés enviar este eventID a tu backend para deduplicar
        // await fetch("/api/fb-capi", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ eventID, phone: normalized }) });
      }
    } catch {
      // silencioso: no rompe la navegación si fbq no está
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      onClick={handleClick}
      className={[
        // Posición fija y centrado horizontal
        "fixed bottom-5 left-1/2 -translate-x-1/2 z-50",
        // Botón
        "inline-flex items-center justify-center gap-2 rounded-full dark:rounded-md px-5 py-3",
        "bg-[#2f6657] dark:bg-[#555] text-white dark:text-[#e5e5e5] shadow-2xl dark:shadow-none shadow-black/15 hover:brightness-110 dark:hover:bg-[#666] active:brightness-95 dark:active:bg-[#444] transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4b41] dark:focus-visible:outline-[#666]",
        // Forzar contenido en una sola línea
        "whitespace-nowrap",
        className,
      ].join(" ")}
    >
      <FaWhatsapp className="h-6 w-6" aria-hidden />
      {!iconOnly && (
        <span className="font-semibold whitespace-nowrap leading-none">
          Agenda por WhatsApp
        </span>
      )}
    </a>
  );
}