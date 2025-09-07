import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arantza - Psicóloga Clínica | Terapia para Ansiedad y Depresión",
  description: "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios. Sesiones personalizadas para acompañarte en tu proceso de sanación.",
  keywords: [
    "psicóloga",
    "psicóloga clínica",
    "terapia psicológica",
    "ansiedad",
    "depresión",
    "terapia",
    "salud mental",
    "psicoterapia",
    "terapeuta",
    "consulta psicológica",
    "Chile"
  ],
  authors: [{ name: "Arantza" }],
  creator: "Arantza - Psicóloga Clínica",
  publisher: "Arantza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://florescencia.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arantza - Psicóloga Clínica | Terapia para Ansiedad y Depresión",
    description: "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios. Sesiones personalizadas para acompañarte en tu proceso de sanación.",
    url: "https://florescencia.cl",
    siteName: "Arantza - Psicóloga Clínica",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/arancha1.png",
        width: 1200,
        height: 630,
        alt: "Arantza - Psicóloga Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arantza - Psicóloga Clínica | Terapia para Ansiedad y Depresión",
    description: "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios.",
    images: ["/arancha1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
