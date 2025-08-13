"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#FFFFFF] shadow-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/avi-salud-logo.png"
              alt="AVI Salud"
              width={100}
              height={60}
              className="h-12 sm:h-14 md:h-16 p-2 sm:p-3 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-16 text-sm xl:text-base">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="/planes" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Planes
            </a>
            {/* Corporativo es privado: no indexar en navbar */}
            <a href="/#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Sobre nosotros
            </a>
            <a href="/#contacto" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contáctanos
            </a>

            <Link href="/planes">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-4 py-2 text-sm xl:text-base">
                Nuestros planes
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/planes"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Planes
              </Link>
              {/* Corporativo es privado: no indexar en navbar móvil */}
              <Link
                href="/#nosotros"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nosotros
              </Link>
              <Link
                href="#/contacto"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </Link>
              <Link href="/planes" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 py-3 text-base font-medium mt-4 w-full">
                  Nuestros planes
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
