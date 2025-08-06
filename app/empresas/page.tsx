import { Button } from '@/components/ui/button'
import { Activity, ChevronRight, Heart } from 'lucide-react'
import Image from 'next/image'

export default function EmpresasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 tracking-tighter mb-4 sm:mb-6"
              style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
            >
              Nuestros Planes
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Conoce en detalle cada uno de nuestros servicios de internación domiciliaria
              diseñados para brindar la mejor atención según tus necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Plans Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            {/* Plan Acompañar Detail */}
            <div className="bg-gradient-to-r from-teal-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Image
                        src="/images/medical-cross-icon.png"
                        alt="Icono médico"
                        width={24}
                        height={24}
                        className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-teal-600"
                      style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                    >
                      Plan Acompañar
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                    Este plan está orientado a brindar contención, apoyo y seguimiento a pacientes
                    que requieren supervisión o asistencia leve en el hogar, ideal para adultos
                    mayores o personas en recuperación leve.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Supervisión y asistencia leve en el hogar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Ideal para adultos mayores
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Contención y apoyo emocional
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Seguimiento de recuperación
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/images/plan-acompanar-card.png"
                    alt="Plan Acompañar - Acompañamiento personalizado"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Plan Vital Detail */}
            <div className="bg-gradient-to-r from-teal-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-teal-600"
                      style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                    >
                      Plan Vital
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                    Pensado para pacientes con patologías agudas o crónicas que
                    requieren atención médica y de enfermería de manera
                    frecuente, ofreciendo un abordaje clínico más intensivo.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Atención médica domiciliaria programada y de urgencia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Enfermería especializada
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Administración de tratamientos y curaciones
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-teal-700 font-medium">
                        Coordinación con estudios complementarios a domicilio
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/images/plan-vital-card.png"
                    alt="Plan Vital - Acompañamiento personalizado"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Plan Integral Detail */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                    >
                      Plan Integral
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-teal-50 mb-6 sm:mb-8">
                    Nuestro servicio más completo, dirigido a pacientes con
                    necesidades complejas que requieren internación domiciliaria
                    de alta intensidad. Brindamos una red de cuidados continua y
                    especializada.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white font-medium">
                        Internación domiciliaria con cobertura 24/7
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white font-medium">
                        Equipamiento médico en el hogar (oxígeno, camas/bombas
                        de infusión, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white font-medium">
                        Equipo multidisciplinario especializado
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white font-medium">
                        Monitoreo continuo de signos vitales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white font-medium">
                        Cuidados paliativos especializados
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/images/plan-integral-card.png"
                    alt="Plan Integral - Cuidados especializados"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 sm:mt-20">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-4 sm:mb-6"
              style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
            >
              ¿Necesitas más información?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Nuestro equipo está listo para ayudarte a elegir el plan que mejor
              se adapte a tus necesidades específicas.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Contactar con un especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
