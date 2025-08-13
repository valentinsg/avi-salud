import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { nombre, apellido, mail, consulta } = await request.json()
    if (!nombre || !apellido || !mail || !consulta) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 })
    }

    // Enviar email usando Resend API si está disponible
    const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.AVI_SALUD_EMAIL
    const to = 'sanchezguevaravalentin@gmail.com'
    const subject = `Nueva consulta desde AVI Salud: ${nombre} ${apellido}`
    const html = `
      <h2>Nueva consulta</h2>
      <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
      <p><strong>Email:</strong> ${mail}</p>
      <p><strong>Consulta:</strong></p>
      <p>${consulta}</p>
    `

    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AVI Salud <onboarding@resend.dev>',
          to,
          subject,
          html,
        }),
      })
      if (!res.ok) {
        const text = await res.text()
        return NextResponse.json({ error: `Error enviando email: ${text}` }, { status: 500 })
      }
      return NextResponse.json({ ok: true })
    }

    // Fallback: log if no API key configured
    console.log('Email (simulado) a:', to, { subject, html })
    return NextResponse.json({ ok: true, simulated: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}


