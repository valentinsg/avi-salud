'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Plan } from '@/lib/planes-data'
import Image from 'next/image'
import Link from 'next/link'

type PlanCardProps = {
  plan: Plan
  ctaHref?: string | ((plan: Plan) => string)
  ctaLabel?: string
  useWhatsApp?: boolean
  whatsAppPhone?: string
}

export function PlanCard({
  plan,
  ctaHref = '/planes',
  ctaLabel = 'conoce más',
  useWhatsApp = false,
  whatsAppPhone,
}: PlanCardProps) {
  const variantClasses =
    plan.id === 'integral'
      ? 'bg-avi-teal-medium border-none'
      : plan.id === 'vital'
      ? 'bg-avi-teal-bright border-none'
      : 'bg-white border-none'

  const textColorTitle = plan.id === 'integral' ? 'text-white' : plan.id === 'vital' ? 'text-white' : 'text-teal-800'
  const textColorDesc =
    plan.id === 'integral' ? 'text-white' : plan.id === 'vital' ? 'text-white' : 'text-teal-900'

  const computedHref = (() => {
    if (useWhatsApp) {
      const phone =
        whatsAppPhone ||
        process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
        '5492235306250'
      const text = encodeURIComponent(
        `Quiero consultar sobre este plan: ${plan.titulo}`
      )
      return `https://wa.me/${phone}?text=${text}`
    }
    // Si ya estamos en /planes, usar ancla interna. En caso contrario, ir a la página específica del plan.
    if (typeof window !== 'undefined' && window.location?.pathname.startsWith('/planes')) {
      return `#plan-${plan.id}`
    }
    return `/planes/${plan.id}`
  })()
  const isExternal = computedHref.startsWith('http')

  return (
    <Card
      className={`${variantClasses} h-auto min-h-[480px] sm:min-h-[500px] md:min-h-[500px] scale-100 sm:scale-100 rounded-2xl sm:rounded-[50px] flex flex-col transition-transform duration-500 shadow-md hover:shadow-xl ease-out transform hover:-translate-y-2 sm:hover:-translate-y-4 md:hover:-translate-y-6 relative max-w-sm mx-auto`}
      style={{ transition: 'transform 0.75s, box-shadow 0.75s ease-in-out' }}
    >
      <CardContent className="p-4 sm:px-4 sm:py-2 flex flex-col h-full justify-between">
        <div className="w-40 h-40 rounded-full flex items-center justify-center -top-20 left-1/2 transform -translate-x-1/2 absolute">
          <Image
            src={plan.icono}
            alt={plan.alt}
            width={120}
            height={120}
            className={`${
              plan.id === 'acompanar'
                ? 'w-16 h-16 sm:w-16 sm:h-16 md:w-24 md:h-24'
                : 'w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40'
            } object-contain rounded-full`}
          />
        </div>
        <div className="flex-1 mt-12">
          <h3
            className={`font-acumin text-2xl sm:text-3xl md:text-4xl font-bold sm:p-4 md:p-6 mb-2 sm:mb-1 md:mb-1 -tracking-wider leading-tighter ${textColorTitle}`}
          >
            {plan.titulo}
          </h3>
          <p
            className={`font-acumin text-base sm:text-lg md:text-xl tracking-tight sm:px-2 md:px-6 ${textColorDesc}`}
          >
            {plan.descripcion}
          </p>
        </div>
        <div className="flex justify-center w-full mt-6 sm:mt-6">
          <Link
            href={computedHref}
            className="w-full sm:w-auto"
            onClick={(e) => {
              if (!isExternal) {
                // Si es un enlace interno a la misma página (solo #)
                if (computedHref.startsWith('#')) {
                  e.preventDefault()
                  const element = document.querySelector(computedHref)
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }
                // Si es un enlace a otra página con #, dejar que el navegador maneje el scroll
                // (ej: /planes#plan-acompanar)
              }
            }}
            {...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
                         <Button
               className={`${
                 plan.id === 'integral'
                   ? 'bg-white hover:bg-gray-100 text-teal-800 focus:ring-gray-300'
                   : plan.id === 'vital'
                   ? 'bg-white hover:bg-gray-100 text-teal-800 focus:ring-gray-300'
                   : 'bg-teal-800 hover:bg-teal-900 text-white focus:ring-teal-300'
               } w-full sm:w-auto mb-2 sm:mb-4 rounded-full px-6 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-3 md:py-4 lg:py-5 text-base sm:text-sm md:text-base lg:text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4`}
              style={{
                boxShadow: '0 8px 24px 0 rgba(19, 78, 74, 0.15)',
                transition: 'transform 0.5s, box-shadow 0.5s',
              }}
            >
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
