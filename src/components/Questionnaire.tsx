import { useState, useEffect } from 'react';

// Lista de preguntas
type Question = { id: number; text: string };
const questions: Question[] = [
  { id: 1, text: '¿Con qué frecuencia te distraes con cosas irrelevantes durante tareas?' },
  { id: 2, text: '¿Te cuesta mantener la atención en conversaciones o lecturas?' },
  { id: 3, text: '¿Olvidas con frecuencia citas o responsabilidades importantes?' },
  { id: 4, text: '¿Tienes dificultad para organizar tareas o actividades?' },
  { id: 5, text: '¿Evitas iniciar tareas que requieren un esfuerzo mental sostenido?' },
];

type Answer = 0 | 1 | 2 | 3 | 4;

// Barra de progreso minimalista
type ProgressBarProps = { progress: number; total: number };
const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => (
  <div className="w-full bg-gray-700 dark:bg-[#555] rounded-full dark:rounded-md h-2">
    <div
      className="h-full bg-white dark:bg-[#e5e5e5] rounded-full dark:rounded-md transition-all duration-300"
      style={{ width: `${(progress / total) * 100}%` }}
    />
  </div>
);

// Botón de opción elegante
type OptionButtonProps = { label: string; value: Answer; selected: boolean; onSelect: (val: Answer) => void };
const OptionButton: React.FC<OptionButtonProps> = ({ label, value, selected, onSelect }) => (
  <button
    onClick={() => onSelect(value)}
    className={`w-full py-4 text-left rounded-xl dark:rounded-md transition-transform duration-200 mb-4 flex items-center justify-between px-6 border ${
      selected
        ? 'bg-white dark:bg-[#333] text-black dark:text-[#e5e5e5] border-transparent dark:border-[#555] shadow-lg dark:shadow-none'
        : 'bg-transparent text-gray-300 dark:text-[#e5e5e5] border-gray-600 dark:border-[#555] hover:bg-gray-800 dark:hover:bg-[#444] hover:scale-105'
    }`}
  >
    <span className="font-medium">{label}</span>
    {selected && <span className="text-white dark:text-[#e5e5e5] font-bold">✓</span>}
  </button>
);

// Tarjeta de pregunta con indicador de paso
type QuestionCardProps = { question: string; current: number; total: number; answer: Answer | null; onAnswer: (val: Answer) => void };
const QuestionCard: React.FC<QuestionCardProps> = ({ question, current, total, answer, onAnswer }) => {
  const labels = ['Nunca', 'Rara vez', 'A veces', 'Frecuente', 'Muy frecuente'];
  return (
    <div className="bg-gray-800 dark:bg-[#333] p-10 rounded-2xl dark:rounded-md shadow-2xl dark:shadow-none w-full max-w-3xl">
      <div className="flex justify-between mb-4">
        <span className="text-sm text-gray-400 dark:text-[#e5e5e5]/70">Pregunta {current + 1} de {total}</span>
      </div>
      <p className="text-2xl mb-8 font-semibold text-white dark:text-[#e5e5e5] leading-relaxed">{question}</p>
      <div className="space-y-2">
        {labels.map((lbl, idx) => (
          <OptionButton
            key={idx}
            label={lbl}
            value={idx as Answer}
            selected={answer === idx}
            onSelect={onAnswer}
          />
        ))}
      </div>
    </div>
  );
};

// Componente de resumen profesional
type SummaryProps = { answers: Array<Answer | null> };
const Summary: React.FC<SummaryProps> = ({ answers }) => {
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  return (
    <div className="bg-white dark:bg-[#333] p-12 rounded-2xl dark:rounded-md shadow-2xl dark:shadow-none w-full max-w-3xl text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-[#e5e5e5]">¡Cuestionario Completado!</h2>
      <p className="text-lg text-gray-700 dark:text-[#e5e5e5]/90 mb-6">Tu puntuación total es <span className="font-semibold">{score}</span> de {answers.length * 4} posibles.</p>
      <p className="text-gray-600 dark:text-[#e5e5e5]/90">Gracias por tu tiempo. Un profesional se pondrá en contacto contigo para evaluar los resultados.</p>
    </div>
  );
};

// Componente principal con animación fade
const Questionnaire: React.FC = () => {
  const total = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Array<Answer | null>>(Array(total).fill(null));
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade on question change
  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timeout);
  }, [current]);

  const handleAnswer = (val: Answer) => {
    const updated = [...answers];
    updated[current] = val;
    setAnswers(updated);
  };

  const next = () => {
    if (current < total - 1) setCurrent(current + 1);
  };

  const progress = answers.filter((a) => a !== null).length;
  const isComplete = progress === total;

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-[#1a1a1a] text-white dark:text-[#e5e5e5] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl mb-8">
        <ProgressBar progress={progress} total={total} />
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out w-full flex flex-col items-center ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {!isComplete ? (
          <>
            <QuestionCard
              question={questions[current].text}
              current={current}
              total={total}
              answer={answers[current]}
              onAnswer={handleAnswer}
            />
            <button
              onClick={next}
              disabled={answers[current] === null}
              className="mt-8 px-10 py-4 rounded-full dark:rounded-md bg-white dark:bg-[#333] text-black dark:text-[#e5e5e5] font-semibold disabled:opacity-50 hover:scale-105 transition-transform duration-200"
            >
              {current < total - 1 ? 'Siguiente' : 'Ver Resultado'}
            </button>
          </>
        ) : (
          <Summary answers={answers} />
        )}
      </div>
    </div>
  );
};

export default Questionnaire;