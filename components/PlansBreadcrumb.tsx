import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface PlansBreadcrumbProps {
  currentPlan: string
  currentPlanPath: string
  textColor?: string
}

export default function PlansBreadcrumb({ currentPlan, currentPlanPath, textColor = "text-gray-600" }: PlansBreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 sm:space-x-2 z-40 text-xs sm:text-sm text-white sm:${textColor} mb-4 sm:mb-6 overflow-hidden`}>
      <Link
        href="/"
        className={`flex items-center hover:text-teal-600 transition-colors text-white sm:${textColor} whitespace-nowrap`}
      >
        <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
        <span className="hidden sm:inline">Inicio</span>
        <span className="sm:hidden">Inicio</span>
      </Link>
      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
      <Link
        href="/planes"
        className={`hover:text-teal-600 transition-colors text-white sm:${textColor} whitespace-nowrap`}
      >
        Planes
      </Link>
      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
      <Link
        href={currentPlanPath}
        className="text-white sm:text-avi-teal-bright font-medium truncate max-w-[120px] sm:max-w-none"
        title={currentPlan}
      >
        {currentPlan}
      </Link>
    </nav>
  )
}
