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

export default function StickyWhatsAppButton({
  phone = "+56 9 7877 1520",
  text = "Hola, me gustaría agendar una sesión.",
  className = "",
  iconOnly = false,
}: Props) {
  const normalized = phone.replace(/[^\d]/g, ""); // solo dígitos para wa.me
  const href = `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      className={[
        // Posición fija y centrado horizontal
        "fixed bottom-5 left-1/2 -translate-x-1/2 z-50",
        // Botón
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3",
        "bg-[#2f6657] text-white shadow-2xl shadow-black/15 hover:brightness-110 active:brightness-95 transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4b41]",
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
