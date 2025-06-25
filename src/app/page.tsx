import PromoCard from "@/components/PromoCard";
import PromoBanner from "@/components/PromoBanner";
import DiagnosticoForm from "@/components/DiagnosticoForm";
import { SymptomsSection } from "@/components/SymptomsSection"
import { StepsSection } from "@/components/StepsSection"
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee"
import { AvatarRecommenders } from "@/components/AvatarRecommenders"
import { NumberTicker } from "@/components/NumberTicker"
import { FAQSection } from "@/components/FAQSection"

export default function Home() {
  return (
    <div>
      <PromoCard />
      <div className="flex justify-center mt-10 mb-10 p-5">
        <PromoBanner />
      </div>
      <DiagnosticoForm />
      <SymptomsSection />
      <StepsSection />
      <AvatarRecommenders />
      <TestimonialsMarquee />
      <NumberTicker target={4733} label="Consultas realizadas" />
      <FAQSection />
    </div>  
  );
}
