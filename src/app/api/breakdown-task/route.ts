// app/api/breakdown-task/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  console.log('[breakdown-task] Received request')
  let title: string

  try {
    const body = await request.json()
    console.log('[breakdown-task] Parsed JSON body:', body)
    title = body.title
  } catch (err) {
    console.error('[breakdown-task] Error parsing JSON:', err)
    return NextResponse.json({ subtasks: [] }, { status: 400 })
  }

  if (typeof title !== 'string' || !title.trim()) {
    console.log('[breakdown-task] Invalid title:', title)
    return NextResponse.json({ subtasks: [] }, { status: 400 })
  }
  console.log('[breakdown-task] Generating subtasks for title:', title)

  const prompt = `Formula 3 preguntas que ayuden a entender y acotar mejor la tarea, de manera que cada pregunta oriente a un subobjetivo claro. "${title}". Devuélvelas en JSON como un arreglo de cadenas.`

  let completion
  try {
    completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    })
    console.log('[breakdown-task] OpenAI response:', completion)
  } catch (err) {
    console.error('[breakdown-task] OpenAI API error:', err)
    return NextResponse.json({ subtasks: [] }, { status: 500 })
  }

  const rawText = completion.choices?.[0]?.message?.content ?? ''
  console.log('[breakdown-task] Raw text from OpenAI:', rawText)
  const text = rawText.trim()

  let subtasks: string[] = []
  try {
    subtasks = JSON.parse(text)
    console.log('[breakdown-task] Parsed subtasks JSON:', subtasks)
  } catch (parseErr) {
    console.warn('[breakdown-task] JSON.parse failed, splitting lines:', parseErr)
    subtasks = text
      .split(/\r?\n/)
      .map(line => line.replace(/^[\-\d\.\s]+/, '').trim())
      .filter(line => !!line)
      .slice(0, 3)
    console.log('[breakdown-task] Fallback subtasks:', subtasks)
  }

  return NextResponse.json({ subtasks })
}