// app/page.tsx (o pages/index.tsx)
"use client";

import { SymptomsSection } from "@/components/SymptomsSection";
import { StepsSection } from "@/components/StepsSection";
import { AvatarRecommenders } from "@/components/AvatarRecommenders";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AboutArantza from "@/components/AboutArantza";
import TestimonialSlider from "@/components/TestimonialSlider";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";

export default function Home() {
  return (
    <div>
      <AboutArantza />
      <TestimonialSlider />
      <SymptomsSection />
      <StepsSection />
      <AvatarRecommenders />
      <FAQSection />
      <Footer />

      {/* Botón fijo de WhatsApp */}
      <StickyWhatsAppButton
        phone="+56 9 7877 1520"
        text="Hola, me gustaría agendar una sesión."
      />
    </div>
  );
}