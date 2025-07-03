// app/api/complete-phrase/route.ts
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json() as { prompt?: string }
    if (!prompt) {
      return NextResponse.json({ error: 'Falta el prompt en el body' }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 60,
    })

    const text = completion.choices[0]?.message?.content?.trim() ?? ''
    return NextResponse.json({ text })
  } catch (error: any) {
    console.error('Error en app/api/complete-phrase/route.ts:', error)
    return NextResponse.json({ error: 'Error interno generando la frase' }, { status: 500 })
  }
}