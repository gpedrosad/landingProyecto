// app/page.tsx (o pages/index.tsx)
'use client'

import PromoCard from '@/components/PromoCard'
import PromoBanner from '@/components/PromoBanner'
import DiagnosticoForm from '@/components/DiagnosticoForm'
import { SymptomsSection } from '@/components/SymptomsSection'
import { StepsSection } from '@/components/StepsSection'
import { TestimonialsMarquee } from '@/components/TestimonialsMarquee'
import { AvatarRecommenders } from '@/components/AvatarRecommenders'
import { FAQSection } from '@/components/FAQSection'
import TaskList from '@/components/TaskList'
import { Task } from '@/components/types'
import PhraseInput from '@/components/PhraseInput'
import Footer from '@/components/Footer'
import Questionnaire from '@/components/Questionnaire'
import AboutArantza from '@/components/AboutArantza'
import TestimonialSlider from '@/components/TestimonialSlider'


const tasks: Task[] = [
  { id: '1',  titulo: 'Lista de cambios de estilos gráficos',        categoria: 'productivo', duracion: 15 },
  { id: '2',  titulo: 'Primer cambio gráfico en web cliente',         categoria: 'productivo', duracion: 15 },
  { id: '3',  titulo: 'Avanzar con componente de la web del cliente', categoria: 'productivo', duracion: 15 },
  { id: '4',  titulo: 'Lista de arreglos de mi aplicación',           categoria: 'productivo', duracion: 15 },
  { id: '5',  titulo: 'Actualizar Excel de atenciones',               categoria: 'productivo', duracion: 15 },
  { id: '6',  titulo: 'Revisar campañas publicitarias',              categoria: 'productivo', duracion: 15 },
  { id: '7',  titulo: 'Ideas para scripts de anuncios',              categoria: 'productivo', duracion: 15 },
  { id: '8',  titulo: 'Grabar video para practicar hablar',          categoria: 'productivo', duracion: 15 },
  { id: '9',  titulo: 'Preparar ingredientes para cocinar',           categoria: 'tiempo',      duracion: 15 },
  { id: '10', titulo: 'Cocinar',                                     categoria: 'tiempo',      duracion: 30 },
  { id: '11', titulo: 'Buscar envío de perchas',                      categoria: 'tiempo',      duracion: 15 },
]

export default function Home() {
  return (
    
      <div>
      {/* <DiagnosticoForm /> */}
      <AboutArantza />
      <TestimonialSlider />
      <SymptomsSection />
      <StepsSection />
      <AvatarRecommenders />
      <TestimonialsMarquee />
      <FAQSection />

      {/* <TaskList /> */}
      <div className="mb-20"></div>
      {/* <PhraseInput /> */}
      {/* <Questionnaire /> */}
      
      <Footer />
      
    </div>
  )
}