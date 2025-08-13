import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { nombre, apellido, mail, consulta } = await request.json()
    if (!nombre || !apellido || !mail || !consulta) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 })
    }

    // Enviar email usando Resend API si está disponible
    const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.AVI_SALUD_EMAIL
    const to = 'info@avisalud.com.ar'
    const subject = `Nueva consulta • AVI Salud — ${nombre} ${apellido}`
    const createdAt = new Date().toLocaleString('es-AR', { hour12: false })
    const html = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f7faf9; padding:24px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
              <tr>
                <td style="background:#0d9488; color:#ecfeff; padding:16px 20px; font-weight:700; font-size:18px;">
                  Nueva consulta — AVI Salud
                </td>
              </tr>
              <tr>
                <td style="padding:20px; color:#0f172a;">
                  <p style="margin:0 0 8px; font-size:14px; color:#475569;">Fecha: ${createdAt}</p>
                  <table cellpadding="0" cellspacing="0" style="width:100%; margin-top:8px;">
                    <tr>
                      <td style="width:160px; padding:6px 0; color:#64748b; font-weight:600;">Nombre</td>
                      <td style="padding:6px 0; color:#0f172a;">${nombre} ${apellido}</td>
                    </tr>
                    <tr>
                      <td style="width:160px; padding:6px 0; color:#64748b; font-weight:600;">Email</td>
                      <td style="padding:6px 0; color:#0f172a;">${mail}</td>
                    </tr>
                    <tr>
                      <td style="width:160px; padding:10px 0; color:#64748b; font-weight:600; vertical-align:top;">Consulta</td>
                      <td style="padding:10px 0; color:#0f172a; white-space:pre-wrap;">${consulta}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background:#f1f5f9; color:#334155; padding:16px 20px; font-size:12px;">
                  Responder a este correo responde al remitente por defecto. Para contactar al interesado, responder a <strong>${mail}</strong>.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Falta RESEND_API_KEY (o AVI_SALUD_EMAIL) en .env.local. Reinicia el server tras agregarla.' }, { status: 500 })
    }

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
          reply_to: mail,
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


