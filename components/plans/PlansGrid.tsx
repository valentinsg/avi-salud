"use client"

import { PlanCard } from "./PlanCard"
import { planesData, type Plan } from "@/lib/planes-data"

type PlansGridProps = {
  plans?: Plan[]
  ctaHref?: string | ((plan: Plan) => string)
  className?: string
}

export function PlansGrid({ plans = planesData, ctaHref = "/planes", className = "" }: PlansGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-12 items-stretch mt-8 sm:mt-12 md:mt-16 px-2 sm:px-0 ${className}`}>
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} ctaHref={ctaHref} />
      ))}
    </div>
  )
}


