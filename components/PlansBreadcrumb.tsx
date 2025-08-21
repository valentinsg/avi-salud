import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface PlansBreadcrumbProps {
  currentPlan: string
  currentPlanPath: string
  textColor?: string
}

export default function PlansBreadcrumb({ currentPlan, currentPlanPath, textColor = "text-gray-600" }: PlansBreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 z-40 text-sm ${textColor} mb-6`}>
      <Link
        href="/"
        className={`flex items-center hover:text-teal-600 transition-colors ${textColor}`}
      >
        <Home className="w-4 h-4 mr-1" />
        Inicio
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href="/planes"
        className={`hover:text-teal-600 transition-colors ${textColor}`}
      >
        Planes
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href={currentPlanPath}
        className="text-avi-teal-bright font-medium"
      >
        {currentPlan}
      </Link>
    </nav>
  )
}
