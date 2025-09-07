// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type FooterProps = {
  logoSrc?: string;
  name?: string;
  tagline?: string;
  phone?: string;
  instagram?: { handle: string; url: string };
};

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo3.png",
  name = "Florescencia",
  phone = "+56 9 7964 3558",
  instagram = { handle: "florescencia.cl", url: "https://instagram.com/florescencia.cl" },
}) => {
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
    "Hola, me gustaría agendar una sesión."
  )}`;

  return (
    <footer className="relative bg-[#6571ac] dark:bg-[#2a2a2a] text-white dark:text-[#e5e5e5] pt-28 pb-16">
      {/* Degradado superior hacia blanco (más alto, detrás del contenido) */}
      <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-t from-[#6571ac] to-white dark:bg-[#2a2a2a] pointer-events-none z-0" />

      {/* Contenido del footer (por encima del degradado) */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-2 rounded-full dark:rounded-md bg-white/10 dark:bg-[#333] px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/15 dark:hover:bg-[#444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 dark:focus-visible:outline-[#555]"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden />
            <span>{phone}</span>
          </a>

          <Link
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al Instagram"
            className="inline-flex items-center gap-2 rounded-full dark:rounded-md bg-white/10 dark:bg-[#333] px-4 py-2 text-sm font-medium tracking-wide hover:bg-white/15 dark:hover:bg-[#444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 dark:focus-visible:outline-[#555]"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            <span>@{instagram.handle.replace(/^@/, "")}</span>
          </Link>
        </div>

        <div className="mt-10 border-t border-white/20 dark:border-[#555] pt-4 text-xs leading-relaxed">
          © {new Date().getFullYear()} {name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;