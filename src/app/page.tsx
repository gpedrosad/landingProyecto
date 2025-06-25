import PromoCard from "@/components/PromoCard";
import PromoBanner from "@/components/PromoBanner";
import DiagnosticoForm from "@/components/DiagnosticoForm";
import { SymptomsSection } from "@/components/SymptomsSection";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <PromoCard />
      <div className="flex justify-center mt-10 mb-10 p-5">
        <PromoBanner />
      </div>
      <DiagnosticoForm />
      <SymptomsSection />
      
    </div>  
  );
}
