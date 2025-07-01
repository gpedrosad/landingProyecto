// components/SortableItem.tsx
'use client'

import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { Task } from './types'

interface SortableItemProps {
  tarea: Task
  completadas: string[]
  toggleTarea: (id: string) => void
}

export default function SortableItem({ tarea, completadas, toggleTarea }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: tarea.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  const completed = completadas.includes(tarea.id)

  // --- Empieza la lógica de subtareas con IA ---
  const [subtasks, setSubtasks] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const breakdown = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/breakdown-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: tarea.titulo })
      })
      const { subtasks: list } = await res.json()
      setSubtasks(list)
    } catch {
      setSubtasks(['Error generando subtareas'])
    } finally {
      setLoading(false)
    }
  }
  // --- Fin de la lógica IA ---

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex flex-col p-3 rounded-xl shadow-md cursor-pointer select-none ${
        completed ? 'bg-green-100 line-through text-gray-500' : 'bg-white'
      }`}
      title="Doble click para marcar/completar"
      onDoubleClick={() => toggleTarea(tarea.id)}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="font-medium">{tarea.titulo}</span>
          <div className="text-sm text-gray-500">
            {tarea.categoria === 'productivo' ? '🟠 Productivo' : '🟡 Por tiempo'} · {tarea.duracion} min
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); breakdown() }}
          disabled={loading}
          className="text-sm text-blue-600 hover:underline"
        >
          {loading ? '...' : 'Desglosar'}
        </button>
      </div>
      {subtasks.length > 0 && (
        <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
          {subtasks.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )}
    </li>
  )
}