// components/SortableItem.tsx
'use client'

import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { Task } from './types'
import TaskHeader from './TaskHeader'

interface SortableItemProps {
  tarea: Task
  completadas: string[]
  toggleTarea: (id: string) => void
  onDelete: (id: string) => void
}

export default function SortableItem({
  tarea,
  completadas,
  toggleTarea,
  onDelete,
}: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: tarea.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  const completed = completadas.includes(tarea.id)

  // --- Lógica de subtareas con IA ---
  const [subtasks, setSubtasks] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const breakdown = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/breakdown-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: tarea.titulo }),
      })
      const data = await res.json()
      const list: string[] = Array.isArray(data.subtasks)
        ? data.subtasks
        : Array.isArray((data.subtasks as any).preguntas)
          ? (data.subtasks as any).preguntas
          : []
      setSubtasks(list)
    } catch {
      setSubtasks(['Error generando subtareas'])
    } finally {
      setLoading(false)
    }
  }
  // --- Fin lógica IA ---

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`flex flex-col p-3 rounded-xl shadow-md select-none relative ${
        completed ? 'bg-green-100 line-through text-gray-500' : 'bg-white'
      }`}
      title="Doble click para marcar/completar"
      onDoubleClick={() => toggleTarea(tarea.id)}
    >
      {/* Botón de eliminar */}
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(tarea.id) }}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        title="Borrar tarea"
      >
        ×
      </button>

      {/* Encabezado de la tarea (draggable) */}
      <div {...attributes} {...listeners}>
        <TaskHeader
          titulo={tarea.titulo}
          categoria={tarea.categoria}
          duracion={tarea.duracion}
        />
      </div>

      {/* Botón para desglosar subtareas */}
      <div className="mt-2 flex justify-end">
        <button
          onClick={(e) => { e.stopPropagation(); breakdown() }}
          disabled={loading}
          className="whitespace-nowrap bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded"
        >
          {loading ? '...' : 'Desglosar'}
        </button>
      </div>

      {/* Lista de subtareas generadas */}
      {subtasks.length > 0 && (
        <ul className="mt-2 ml-6 list-disc text-sm text-gray-700">
          {subtasks.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </li>
  )
}