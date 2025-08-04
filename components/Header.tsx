import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-[#F0FDFA] shadow-sm border-b fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/avi-salud-logo.png"
              alt="AVI Salud"
              width={100}
              height={60}
              className="h-16 p-2 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            <a href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contáctanos
            </a>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-5">
              Nuestros planes
              <ChevronRight className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
