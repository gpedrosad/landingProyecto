import Link from 'next/link';
import { Instagram } from 'lucide-react';

interface FooterProps {
  /** Opciones de fondo: 'pink' o 'purple' */
  variant?: 'pink' | 'purple';
}

const bgClasses: Record<NonNullable<FooterProps['variant']>, string> = {
  pink: 'bg-pink-50',
  purple: 'bg-purple-50',
};

const Footer: React.FC<FooterProps> = ({ variant = 'pink' }) => {
  const bgClass = bgClasses[variant];

  return (
    <footer className={`${bgClass} text-gray-700 py-12 rounded-t-2xl shadow-inner`}>  
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información de contacto */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Arantazu Larraza</h3>
          <p className="text-sm">Psicóloga Clínica</p>
          <p className="text-sm">+54 9 11 1234 5678</p>
          <p className="text-sm">arantazu@psico.com</p>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-2">Instagram</h3>
          <Link
            href="https://instagram.com/arantazu_psico"
            aria-label="Instagram"
            className="flex items-center space-x-2 hover:opacity-80">
            <div className="p-2 bg-white rounded-full shadow-md">
              <Instagram size={24} />
            </div>
            <span className="text-sm">@arantazu_psico</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Arantazu Larraza. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;