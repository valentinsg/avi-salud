'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre'),
  apellido: z.string().min(2, 'Ingresa tu apellido'),
  mail: z.string().email('Correo inválido'),
  consulta: z.string().min(10, 'Contanos un poco más (mínimo 10 caracteres)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true)
    setServerMessage(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Error al enviar')
      setServerMessage('Gracias, recibimos tu consulta. Te contactaremos pronto.')
      reset()
    } catch (err: any) {
      setServerMessage(err.message || 'No se pudo enviar. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white shadow-lg hover:shadow-[0_4px_24px_0_rgba(13,148,136,0.18)] transition-shadow duration-300 w-full rounded-2xl sm:rounded-3xl">
      <CardContent className="p-5 sm:p-6">
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label className="block text-teal-800 font-medium mb-1 text-sm sm:text-base" htmlFor="nombre">
              Nombre
            </label>
            <Input
              id="nombre"
              placeholder=""
              className="bg-gray-50 border-2 border-transparent focus:border-teal-400 rounded-lg shadow focus:shadow-md transition-shadow w-full h-12 text-base sm:text-lg"
              {...register('nombre')}
            />
            {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre.message}</p>}
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-1 text-sm sm:text-base" htmlFor="apellido">
              Apellido
            </label>
            <Input
              id="apellido"
              placeholder=""
              className="bg-gray-50 border-2 border-transparent focus:border-teal-400 rounded-lg shadow focus:shadow-md transition-shadow w-full h-12 text-base sm:text-lg"
              {...register('apellido')}
            />
            {errors.apellido && <p className="text-red-600 text-xs mt-1">{errors.apellido.message}</p>}
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-1 text-sm sm:text-base" htmlFor="mail">
              Mail
            </label>
            <Input
              id="mail"
              type="email"
              placeholder=""
              className="bg-gray-50 border-2 border-transparent focus:border-teal-400 rounded-lg shadow focus:shadow-md transition-shadow w-full h-12 text-base sm:text-lg"
              {...register('mail')}
            />
            {errors.mail && <p className="text-red-600 text-xs mt-1">{errors.mail.message}</p>}
          </div>
          <div>
            <label className="block text-teal-800 font-medium mb-1 text-sm sm:text-base" htmlFor="consulta">
              Consulta
            </label>
            <Textarea
              id="consulta"
              placeholder=""
              className="bg-gray-50 border-2 border-transparent focus:border-teal-400 rounded-lg min-h-[120px] sm:min-h-[140px] resize-none shadow focus:shadow-md transition-shadow w-full text-base sm:text-lg"
              {...register('consulta')}
            />
            {errors.consulta && <p className="text-red-600 text-xs mt-1">{errors.consulta.message}</p>}
          </div>
          <div className="pt-2 text-left">
            <Button type="submit" disabled={isSubmitting} className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 py-3 font-bold">
              <span className="inline-flex items-center gap-2">
                Enviar
                <ChevronRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {serverMessage && <p className="text-teal-800 text-sm">{serverMessage}</p>}
        </form>
      </CardContent>
    </Card>
  )
}


