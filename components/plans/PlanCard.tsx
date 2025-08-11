"use client"

import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Plan } from "@/lib/planes-data"

type PlanCardProps = {
  plan: Plan
  ctaHref?: string | ((plan: Plan) => string)
  ctaLabel?: string
  useWhatsApp?: boolean
  whatsAppPhone?: string
}

export function PlanCard({
  plan,
  ctaHref = "/planes",
  ctaLabel = "Más información",
  useWhatsApp = false,
  whatsAppPhone,
}: PlanCardProps) {
  const variantClasses =
    plan.id === "integral"
      ? "bg-teal-700 border-2 border-teal-50"
      : plan.id === "vital"
      ? "bg-teal-50 border-2 border-teal-700"
      : "bg-white border-2 border-teal-50"

  const textColorTitle = plan.id === "integral" ? "text-white" : "text-teal-600"
  const textColorDesc = plan.id === "integral" ? "text-gray-100" : "text-gray-600"

  const computedHref = (() => {
    if (useWhatsApp) {
      const phone =
        whatsAppPhone || process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5492235306250"
      const text = encodeURIComponent(
        `Quiero consultar sobre este plan: ${plan.titulo}`
      )
      return `https://wa.me/${phone}?text=${text}`
    }
    return typeof ctaHref === "function" ? ctaHref(plan) : ctaHref
  })()
  const isExternal = computedHref.startsWith("http")

  return (
    <Card
      className={`${variantClasses} h-auto min-h-[480px] sm:min-h-[500px] md:min-h-[500px] scale-100 sm:scale-100 rounded-2xl sm:rounded-3xl flex flex-col transition-transform duration-500 shadow-md hover:shadow-xl ease-out transform hover:-translate-y-2 sm:hover:-translate-y-4 md:hover:-translate-y-6`}
      style={{ transition: "transform 0.75s, box-shadow 0.75s ease-in-out" }}
    >
      <CardContent className="p-4 sm:p-2 flex flex-col h-full justify-between">
        <div className="flex-1">
          <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full flex items-center justify-center -ml-4 md:mr-2 mb-3">
            <Image
              src={plan.icono}
              alt={plan.alt}
              width={80}
              height={80}
              className="w-20 h-20 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
            />
          </div>
          <h3
            className={`font-cocogoose text-2xl sm:text-3xl md:text-4xl font-semibold sm:p-4 md:p-5 mb-3 sm:mb-2 md:mb-2 -tracking-wider leading-tighter ${textColorTitle}`}
          >
            {plan.titulo}
          </h3>
          <ul
            className={`font-acumin leading-[1.4] font-medium text-base sm:text-base tracking-tighter sm:px-4 md:px-6 space-y-3 ${textColorDesc}`}
          >
            {Array.isArray(plan.descripcion) ? (
              plan.descripcion.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span
                    className={`mr-3 mt-0.5 inline-flex items-center justify-center rounded-full border ${
                      plan.id === "integral"
                        ? "border-teal-100 bg-teal-600 text-white"
                        : "border-teal-300 bg-teal-50 text-teal-700"
                    } w-5 h-5`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="inline-block">
                    {item}
                  </span>
                </li>
              ))
            ) : (
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mt-0.5 mr-2" />
                <span>{plan.descripcion}</span>
              </li>
            )}
          </ul>
        </div>
        <div className="flex justify-center w-full mt-6 sm:mt-6">
          <Link
            href={computedHref}
            className="w-full sm:w-auto"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Button
              className={`${
                plan.id === "integral"
                  ? "bg-teal-50 hover:bg-teal-100 text-teal-600 focus:ring-gray-300"
                  : "bg-teal-600 hover:bg-teal-700 text-teal-50 focus:ring-teal-300"
              } w-full sm:w-auto mb-2 sm:mb-4 rounded-full px-6 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-3 md:py-4 lg:py-5 text-base sm:text-sm md:text-base lg:text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4`}
              style={{ boxShadow: "0 8px 24px 0 rgba(19, 78, 74, 0.15)", transition: "transform 0.5s, box-shadow 0.5s" }}
            >
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}


