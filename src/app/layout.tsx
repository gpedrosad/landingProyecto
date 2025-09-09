import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // 👈 Importante

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
  description:
    "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios. Sesiones personalizadas para acompañarte en tu proceso de sanación.",
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
    "Chile",
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
    description:
      "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios. Sesiones personalizadas para acompañarte en tu proceso de sanación.",
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
    description:
      "Psicóloga clínica especializada en ansiedad y depresión. Enfoque humano, basado en evidencia y libre de juicios.",
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
    other: {
      "facebook-domain-verification": "bu8apl1tam1guunmfqv5hvzjiz46qt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* 👇 Meta Pixel con next/script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2310917799347699');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2310917799347699&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}