// app/api/breakdown-task/route.ts
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { title } = await request.json()
    if (typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ subtasks: [] }, { status: 400 })
    }

    const prompt = `Desglosa en 3 subtareas claras y accionables la siguiente tarea: "${title}". Devuélvelas en JSON como un arreglo de cadenas.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    })

    // Validamos que tengamos al menos una elección y contenido
    const message = completion.choices?.[0]?.message
    const rawText = message?.content ?? ''
    const text = rawText.trim()

    let subtasks: string[] = []

    try {
      subtasks = JSON.parse(text)
    } catch {
      subtasks = text
        .split(/\r?\n/)
        .map(line => line.replace(/^[\-\d\.\s]+/, '').trim())
        .filter(line => line.length)
        .slice(0, 3)
    }

    return NextResponse.json({ subtasks })
  } catch (err) {
    console.error('Error in breakdown-task:', err)
    return NextResponse.json({ subtasks: [] }, { status: 500 })
  }
}