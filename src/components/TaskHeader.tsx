import React from 'react'
import { Task } from './types'

interface TaskHeaderProps {
  titulo: Task['titulo']
  categoria: Task['categoria']
  duracion: Task['duracion']
}

export default function TaskHeader({ titulo, categoria, duracion }: TaskHeaderProps) {
  return (
    <div className="flex items-center justify-between cursor-grab">
      <div>
        <span className="font-medium">{titulo}</span>
        <div className="text-sm text-gray-500">
          {categoria === 'productivo' ? '🟠 Productivo' : '🟡 Por tiempo'} · {duracion} min
        </div>
      </div>
    </div>
  )
}