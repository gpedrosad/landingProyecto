"use client";

import { useState } from "react";

export default function DiagnosticoForm() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [informe, setInforme] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setInforme("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "Eres un psicólogo clínico redactando informes diagnósticos breves. Sé claro, profesional y preciso. Haz un informe según este diagnostico y sintomas acorde a el.",
            },
            {
              role: "user",
              content: `Datos clínicos ingresados:\n${input}\n\nRedacta un informe diagnóstico completo.`,
            },
          ],
        }),
      });

      const data = await res.json();
      const output = data.choices?.[0]?.message?.content || "Error al generar informe.";
      setInforme(output);
    } catch (error) {
      setInforme("Hubo un error al contactar con OpenAI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Generador de Informe Diagnóstico</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={8}
        placeholder="Ingresa aquí los datos clínicos del paciente..."
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      />

      <button
        onClick={handleSubmit}
        disabled={loading || !input}
        className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Generando..." : "Generar Informe"}
      </button>

      {informe && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
          {informe}
        </div>
      )}
    </div>
  );
}