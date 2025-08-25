// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

type FooterProps = {
  /** Ruta del logo (por defecto /logo.png en /public) */
  logoSrc?: string;
  /** Nombre de marca para fallback del logo y copyright */
  name?: string;
  /** Email de contacto */
  email?: string;
  /** Subtítulo bajo el logo (opcional) */
  tagline?: string;
  /** Instagram (handle sin @ y URL). Pasa null para ocultarlo. */
  instagram?: { handle: string; url: string } | null;
};

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo.png",
  name = "Arantza",
  email = "info@arantza.com",
  tagline = "FLORESCENCIA",
  instagram = null, // por defecto oculto para imitar tu diseño
}) => {
  return (
    <footer className="bg-[#6571ac] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        {/* Logo / Nombre */}
        {logoSrc ? (
          <div className="mx-auto mb-6 h-20 w-44 relative">
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              fill
              priority
              className="object-contain"
            />
          </div>
        ) : (
          <h2 className="mb-2 text-3xl font-semibold tracking-wide">{name}</h2>
        )}

        {/* Tagline (opcional) */}
        {tagline && (
          <p className="text-xs uppercase tracking-[0.25em] opacity-95">
            {tagline}
          </p>
        )}

        {/* Email */}
        <div className="mt-6">
          <a
            href={`mailto:${email}`}
            className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            {email}
          </a>
        </div>

        {/* Instagram (opcional) */}
        {instagram && (
          <div className="mt-6 flex justify-center">
            <Link
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span>@{instagram.handle.replace(/^@/, "")}</span>
            </Link>
          </div>
        )}

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-white/20 pt-4 text-xs leading-relaxed">
          © {new Date().getFullYear()} {name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;