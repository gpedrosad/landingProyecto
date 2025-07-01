// components/TaskForm.tsx
'use client'

import { useState, FormEvent } from 'react'
import { Task } from './types'

interface TaskFormProps {
  onAdd: (tarea: Task) => void
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState<'productivo' | 'tiempo'>('productivo')
  const [duracion, setDuracion] = useState(15)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const id = Date.now().toString()
    onAdd({ id, titulo: titulo.trim() || `Tarea ${id}`, categoria, duracion })
    setTitulo('')
    setCategoria('productivo')
    setDuracion(15)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <div className="flex space-x-2">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as 'productivo' | 'tiempo')}
          className="p-2 border rounded flex-1"
        >
          <option value="productivo">Productivo</option>
          <option value="tiempo">Por tiempo</option>
        </select>
        <input
          type="number"
          min={1}
          value={duracion}
          onChange={(e) => setDuracion(Number(e.target.value))}
          className="p-2 border rounded w-24"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Agregar tarea
      </button>
    </form>
  )
}