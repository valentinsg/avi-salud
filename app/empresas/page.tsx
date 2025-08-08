import { Button } from '@/components/ui/button'
import { Briefcase, Building, Handshake, Plus } from 'lucide-react'
import Image from 'next/image'

export default function EmpresasPage() {
  return (
    <div className="min-h-screen bg-teal-900">
      {/* Header Section */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Image
            src="/images/teal-gradient-bg.png"
            alt="Fondo de degradado azul"
            fill
            className="object-cover object-center md:object-[center_32%] w-full h-full blur-xs shadow-lg z-0"
          />
          <div className="absolute inset-0 z-10 pointer-events-none bg-teal-900/25" />

          {/* Curved Top */}
          <div className="absolute top-0 left-0 right-0 hidden md:block">
            <svg
              className="w-full h-48 sm:h-56 md:h-72 lg:h-96"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#F0FDFA"
                d="M0,0 L0,0 L0,200 C1000,280 540,125 700,125 C840,125 1040,125 1240,125 C1340,125 1390,125 1440,125 C1440,125 1440,0 1440,0 z"
              />
            </svg>
          </div>

          {/* Title */}
          <div className="relative z-20 mb-16 pt-12 md:pt-16">
            <h1 className="font-cocogoose text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-400">
                SERVICIOS
              </span>
              <span className="block text-teal-900">CORPORATIVOS</span>
            </h1>
          </div>

          {/* Main content */}
          <div className="relative z-20 max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-cocogoose text-2xl md:text-3xl lg:text-4xl font-bold text-teal-300 mb-6 leading-tight">
              Soluciones estratégicas de internación domiciliaria para
              financiadores y prestadores de salud.
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              AVI Salud ofrece una propuesta eficiente y humanizada que permite
              descongestionar el sistema hospitalario, reducir costos operativos
              y elevar la experiencia del paciente. Nuestra división Empresas se
              adapta a las necesidades de:
            </p>
          </div>

          {/* Services Grid */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 - Gestión Integral */}
            <div className="bg-teal-300 rounded-2xl p-6 md:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-300">
                <Building className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="font-cocogoose text-sm md:text-base font-bold text-white uppercase leading-tight mb-4">
                Gestión integral de salud ocupacional para empresas
              </h3>
              <Button
                variant="outline"
                className="bg-teal-900 text-white border-teal-900 hover:bg-teal-800 rounded-lg px-4 py-2 text-sm"
              >
                ver más
              </Button>
            </div>

            {/* Card 2 - Partners Estratégicos */}
            <div className="bg-teal-300 rounded-2xl p-6 md:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-300">
                <Handshake className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="font-cocogoose text-sm md:text-base font-bold text-white uppercase leading-tight mb-4">
                Partners estratégicos para empresas financiadoras de salud
              </h3>
              <Button
                variant="outline"
                className="bg-teal-900 text-white border-teal-900 hover:bg-teal-800 rounded-lg px-4 py-2 text-sm"
              >
                ver más
              </Button>
            </div>

            {/* Card 3 - Aliados Estratégicos */}
            <div className="bg-teal-300 rounded-2xl p-6 md:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-300">
                <Plus className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="font-cocogoose text-sm md:text-base font-bold text-white uppercase leading-tight mb-4">
                Aliados estratégicos para prestadores de salud
              </h3>
              <Button
                variant="outline"
                className="bg-teal-900 text-white border-teal-900 hover:bg-teal-800 rounded-lg px-4 py-2 text-sm"
              >
                ver más
              </Button>
            </div>

            {/* Card 4 - Soluciones Médicas */}
            <div className="bg-teal-300 rounded-2xl p-6 md:p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-teal-300">
                <Briefcase className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="font-cocogoose text-sm md:text-base font-bold text-white uppercase leading-tight mb-4">
                Soluciones médicas estratégicas para aseguradoras de riesgos del
                trabajo
              </h3>
              <Button
                variant="outline"
                className="bg-teal-900 text-white border-teal-900 hover:bg-teal-800 rounded-lg px-4 py-2 text-sm"
              >
                ver más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Panel Layout Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Top Left Panel - Gestión Integral */}
            <div className="bg-teal-300 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border-2 border-teal-300">
                  <Building className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-cocogoose text-xl md:text-2xl font-bold text-white uppercase leading-tight">
                  Gestión integral de salud ocupacional para empresas
                </h3>
              </div>
              <div className="text-white space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Colaboramos con las empresas para la gestión integral de la
                  salud de sus equipos, ofreciendo servicios médicos dinámicos,
                  efectivos y adaptados a sus necesidades específicas.
                </p>
                <p>
                  Nos especializamos en la prevención, control y seguimiento de
                  la salud ocupacional, priorizando la eficiencia y
                  personalización en cada propuesta.
                </p>
                <p>
                  Nuestra propuesta busca reducir el ausentismo, anticipar
                  factores de riesgo, mejorar el rendimiento organizacional y
                  fomentar un ambiente laboral saludable comprometido con el
                  bienestar de las personas.
                </p>
              </div>
            </div>

            {/* Top Right Panel - Skyscrapers Image */}
            <div className="relative h-80 md:h-96 lg:h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-600 rounded-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Entorno Corporativo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Panel - Patient Care Image */}
            <div className="relative h-80 md:h-96 lg:h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">
                      Cuidado Personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Panel - Partners Estratégicos */}
            <div className="bg-teal-300 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border-2 border-teal-300">
                  <Handshake className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-cocogoose text-xl md:text-2xl font-bold text-white uppercase leading-tight">
                  Partners estratégicos para empresas financiadoras de salud
                </h3>
              </div>
              <div className="text-white space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Somos el partner ideal para empresas de medicina prepaga,
                  obras sociales y mutuales de Mar del Plata y la región.
                </p>
                <p>
                  Nuestro servicio de internación domiciliaria es un excelente
                  complemento para la oferta médica, un modelo innovador de
                  atención post-hospitalaria que facilita la recuperación de
                  pacientes desde hospitales o clínicas en sus propios hogares.
                </p>
                <p>
                  Nos enfocamos en reducir los costos de servicio sin
                  comprometer la calidad de la atención médica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
