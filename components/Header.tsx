'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPlanesDropdownOpen, setIsPlanesDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#FFFFFF]  shadow-sm border-b fixed top-0 left-0 right-0 z-50 font-acumin">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/avi-salud-logo.png"
              alt="AVI Salud"
              width={100}
              height={60}
              className="h-12 sm:h-14 md:h-20 p-2 sm:p-3 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-16 text-sm xl:text-base">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Inicio
            </a>

            {/* Dropdown de Planes */}
            <div
              className="relative group"
              onMouseEnter={() => setIsPlanesDropdownOpen(true)}
              onMouseLeave={() => setIsPlanesDropdownOpen(false)}
            >
              <Link href="/planes" className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Planes
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                <div className="py-2">

                  <Link
                    href="/planes/acompanar"
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors border-b border-gray-100"
                  >
                    <div className="font-semibold text-teal-700">Plan Acompañar</div>
                    <div className="text-sm text-gray-500 mt-1">Acompañamiento y seguimiento básico</div>
                  </Link>

                  <Link
                    href="/planes/vital"
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors border-b border-gray-100"
                  >
                    <div className="font-semibold text-teal-700">Plan Vital</div>
                    <div className="text-sm text-gray-500 mt-1">Atención médica intensiva</div>
                  </Link>

                  <Link
                    href="/planes/integral"
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <div className="font-semibold text-teal-700">Plan Integral</div>
                    <div className="text-sm text-gray-500 mt-1">Cobertura completa personalizada</div>
                  </Link>
                </div>
              </div>
            </div>

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

              {/* Planes en móvil */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium py-2 border-b border-gray-100">Planes</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/planes/acompanar"
                    className="block text-gray-600 hover:text-teal-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • Plan Acompañar
                  </Link>
                  <Link
                    href="/planes/vital"
                    className="block text-gray-600 hover:text-teal-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • Plan Vital
                  </Link>
                  <Link
                    href="/planes/integral"
                    className="block text-gray-600 hover:text-teal-600 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • Plan Integral
                  </Link>
                </div>
              </div>

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
