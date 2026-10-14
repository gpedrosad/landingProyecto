import type { CSSProperties } from "react";

/**
 * Transición de fondo entre secciones.
 *
 * Cada unión se reparte mitad en cada sección: la de arriba se funde hasta el
 * color intermedio y la de abajo parte desde ese mismo color. La mezcla sigue
 * una curva smoothstep (arranca y termina lento), así no se nota dónde empieza
 * ni dónde termina el degradado. Requiere la clase `section-fade` (globals.css).
 */

type Space = "oklab" | "oklch";
type Edge = { color: string; space?: Space };

const SAMPLES = 8;
const smoothstep = (s: number) => s * s * (3 - 2 * s);

// Tramo [s0, s1] de la transición from → to, de arriba hacia abajo
function band(from: string, to: string, space: Space, s0: number, s1: number) {
  const stops = Array.from({ length: SAMPLES + 1 }, (_, i) => {
    const p = i / SAMPLES;
    const mix = smoothstep(s0 + (s1 - s0) * p) * 100;
    return `color-mix(in ${space}, ${to} ${mix.toFixed(1)}%, ${from}) ${(p * 100).toFixed(1)}%`;
  });
  return `linear-gradient(in ${space}, ${stops.join(", ")})`;
}

/**
 * @param base   color de fondo de la sección
 * @param top    color de la sección anterior (funde desde ahí)
 * @param bottom color de la sección siguiente (funde hacia ahí)
 * Usar el mismo `space` en los dos lados de una unión.
 */
export function sectionFade(base: string, { top, bottom }: { top?: Edge; bottom?: Edge }): CSSProperties {
  const style: Record<string, string> = {};
  if (top) style["--fade-top"] = band(top.color, base, top.space ?? "oklab", 0.5, 1);
  if (bottom) style["--fade-bottom"] = band(base, bottom.color, bottom.space ?? "oklab", 0, 0.5);
  return style as CSSProperties;
}
