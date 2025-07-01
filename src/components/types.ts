// components/types.ts

// Define aquí el tipo Task compartido por todos los componentes
export type Task = {
    id: string
    titulo: string
    categoria: 'productivo' | 'tiempo'
    duracion: number
  }
  