// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type FooterProps = {
  /** Ruta del logo (por defecto /logo.png en /public) */
  logoSrc?: string;
  /** Nombre de marca para fallback del logo y copyright */
  name?: string;
  /** Subtítulo bajo el logo (opcional) */
  tagline?: string;
  /** WhatsApp (número en cualquier formato, se normaliza) */
  phone?: string;
  /** Instagram (handle sin @ y URL). */
  instagram?: { handle: string; url: string };
};

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo3.png",
  name = "Florescencia",
  phone = "+56 9 7877 1520",
  instagram = { handle: "florescencia.cl", url: "https://instagram.com/florescencia.cl" },
}) => {
  // Normaliza el número a dígitos para wa.me
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
    "Hola, me gustaría agendar una sesión."
  )}`;

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



        {/* Botones de contacto */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* WhatsApp */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden />
            <span>{phone}</span>
          </a>

          {/* Instagram */}
          <Link
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al Instagram"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            <span>@{instagram.handle.replace(/^@/, "")}</span>
          </Link>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-white/20 pt-4 text-xs leading-relaxed">
          © {new Date().getFullYear()} {name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;