"use client"

import { planesData, type Plan } from "@/lib/planes-data"
import { PlanCard } from "./PlanCard"

type PlansGridProps = {
  plans?: Plan[]
  ctaHref?: string | ((plan: Plan) => string)
  className?: string
  useWhatsApp?: boolean
  whatsAppPhone?: string
}

export function PlansGrid({
  plans = planesData,
  ctaHref = "/planes",
  className = "",
  useWhatsApp = false,
  whatsAppPhone,
}: PlansGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6 md:gap-8 lg:gap-12 items-stretch mt-8 sm:mt-12 md:mt-16 px-2 sm:px-0 justify-items-center ${className}`}>
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          ctaHref={ctaHref}
          useWhatsApp={useWhatsApp}
          whatsAppPhone={whatsAppPhone}
        />
      ))}
    </div>
  )
}


