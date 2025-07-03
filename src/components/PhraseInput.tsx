import React, { useState, useEffect, useRef } from 'react'

export default function PhraseInput() {
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const fetchSuggestion = async (partial: string) => {
    if (!partial.trim()) return
    const prompt = `Continúa la siguiente frase de manera gramaticalmente correcta y termina con un punto. NO repitas el texto original, solo devuelve la continuación: "${partial}"`
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/complete-phrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        setSuggestion('')
      } else {
        setSuggestion(data.text.trim())
      }
    } catch {
      setError('Error comunicándose con la API')
      setSuggestion('')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!text.endsWith('.')) fetchSuggestion(text)
      else setSuggestion('')
    }, 500)
    return () => clearTimeout(timer)
  }, [text])

  // Calcula la mayor parte común entre texto y sugerencia
  // Ahora la API devuelve solo la parte a agregar
  // La sugerencia completa será el texto adicional
  const suffix = suggestion

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' && suffix) {
      e.preventDefault()
      const full = text + suffix
      setText(full)
      setSuggestion('')
      setTimeout(() => textareaRef.current?.setSelectionRange(full.length, full.length), 0)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <label htmlFor="phrase" className="block text-sm font-medium text-gray-700 mb-1">
        Escribe tu frase:
      </label>
      <div className="relative">
        <pre
          className="absolute inset-0 p-2 m-0 whitespace-pre-wrap break-all pointer-events-none text-base font-sans"
          style={{ color: 'transparent' }}
        >
          {text}
          <span className="text-gray-400">{suffix}</span>
        </pre>
        <textarea
          id="phrase"
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
          className="relative block w-full border border-gray-300 rounded-md p-2 bg-transparent text-black focus:ring focus:ring-indigo-100 focus:border-indigo-300 whitespace-pre-wrap break-all"
          placeholder="Escribe algo que debería ser una frase..."
        />
      </div>
      <div className="mt-2 flex items-center space-x-2">
        {loading && <span className="text-gray-500">Generando sugerencia...</span>}
        {error && <span className="text-red-500">{error}</span>}
      </div>
      {suffix && (
        <p className="mt-1 text-sm text-gray-500">
          Presiona <kbd className="px-1 border rounded">Tab</kbd> para aceptar la sugerencia.
        </p>
      )}
    </div>
  )
}
