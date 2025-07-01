// components/TaskList.tsx
'use client'

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'
import { Task } from './types'
import SortableItem from './SortableItem'
import TaskForm from './TaskForm'

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [order, setOrder] = useState<string[]>([])

  // Carga inicial desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('tasks')
    const storedCompleted = localStorage.getItem('completedTasks')
    const storedOrder = localStorage.getItem('taskOrder')

    const initialTasks: Task[] = stored ? JSON.parse(stored) : []
    const initialCompleted: string[] = storedCompleted ? JSON.parse(storedCompleted) : []
    const initialOrder: string[] = storedOrder ? JSON.parse(storedOrder) : []

    setTasks(initialTasks)
    setCompletedIds(initialCompleted)
    setOrder(initialOrder.length ? initialOrder : initialTasks.map(t => t.id))
  }, [])

  // Persistencia en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedIds))
  }, [completedIds])

  useEffect(() => {
    localStorage.setItem('taskOrder', JSON.stringify(order))
  }, [order])

  // Alterna completada/no completada
  const toggleTask = (id: string) => {
    setCompletedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  // Manejadores DnD
  const sensors = useSensors(useSensor(PointerSensor))
  const handleDragEnd = ({ active, over }: any) => {
    if (over && active.id !== over.id) {
      setOrder(prev => {
        const oldIndex = prev.indexOf(active.id)
        const newIndex = prev.indexOf(over.id)
        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }

  // Añade una nueva tarea
  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
    setOrder(prev => [...prev, task.id])
  }

  // Borra todo
  const clearAll = () => {
    if (confirm('¿Seguro que quieres borrar todas las tareas?')) {
      setTasks([])
      setCompletedIds([])
      setOrder([])
      localStorage.removeItem('tasks')
      localStorage.removeItem('completedTasks')
      localStorage.removeItem('taskOrder')
    }
  }

  // Ordena tareas según `order`
  const orderedTasks = order
    .map(id => tasks.find(t => t.id === id))
    .filter((t): t is Task => Boolean(t))

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Lista de tareas</h2>
        <button
          onClick={clearAll}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Borrar todo
        </button>
      </div>

      {/* Formulario modular */}
      <TaskForm onAdd={addTask} />

      {/* Lista draggable */}
      {orderedTasks.length === 0 ? (
        <p className="text-gray-500 italic">No hay tareas pendientes.</p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={order} strategy={verticalListSortingStrategy}>
            <ul className="space-y-2">
              {orderedTasks.map(task => (
                <SortableItem
                  key={task.id}
                  tarea={task}
                  completadas={completedIds}
                  toggleTarea={toggleTask}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      )}
    </div>
  )
}