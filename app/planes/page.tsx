import { PlansGrid } from '@/components/plans/PlansGrid'
import { Activity, ChevronRight, Heart, Plus } from 'lucide-react'
import Image from 'next/image'

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-[#F0FDFA]">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden w-full py-12 md:py-16 lg:py-20 min-h-[60vh] md:min-h-[68vh] lg:min-h-[75vh]"
      >
        <Image
          src="/images/specialist-with-grandma-optimized.webp"
          alt="Enfermera cuidando paciente"
          fill
          className="object-cover object-center md:object-[center_32%] w-full h-full blur-xs shadow-lg z-0"
        />
        <div className="absolute inset-0 z-10 pointer-events-none bg-teal-900/25" />

        {/* Content */}
        <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-4 px-4 sm:px-5">
          <div className="self-start flex flex-col gap-3 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-cocogoose max-w-full -tracking-wider text-left text-teal-50 drop-shadow-md font-bold">
              Nuestros Planes
            </h1>
            <p className="text-left font-cocogoose -tracking-wider text-teal-50/95 drop-shadow-sm text-2xl md:text-3xl">
              Conocé en detalle cada servicio de internación domiciliaria y
              elegí el que mejor se adapte a tus necesidades.
            </p>
          </div>
          <PlansGrid />
        </div>
      </section>

      {/* Secciones detalladas por plan */}
      <section id="planes" className="relative w-full">
        <div
          id="plan-acompanar"
          className="relative overflow-hidden w-full py-8 md:py-10 lg:py-12 min-h-[75vh]"
        >
          {/* Imagen de fondo difuminada */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/light-geometric-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-cocogoose text-2xl sm:text-3xl font-bold text-teal-600">
                    Plan Acompañar
                  </h3>
                </div>
                <p className="font-acumin text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                  Orientado a brindar contención, apoyo y seguimiento a
                  pacientes que requieren supervisión o asistencia leve en el
                  hogar. Ideal para adultos mayores o personas en recuperación
                  leve.
                </p>
                <ul className="font-acumin space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                    <span>Supervisión y asistencia leve en el hogar</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                    <span>Ideal para adultos mayores</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                    <span>Contención y apoyo emocional</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                    <span>Seguimiento de recuperación</span>
                  </li>
                </ul>
              </div>
              <div className="relative order-1 lg:order-2 w-full h-full">
                <Image
                  src="/images/plan-acompanar-card.png"
                  alt="Plan Acompañar"
                  width={560}
                  height={500}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Vital */}
          <div
            id="plan-vital"
            className="relative overflow-hidden w-full py-10 md:py-12 lg:py-16 min-h-[75vh]"
          >
            {/* Imagen de fondo difuminada */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/teal-gradient-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scaleX(-1)',
              }}
            />
            <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="font-cocogoose text-2xl sm:text-3xl font-bold text-teal-600">
                      Plan Vital
                    </h3>
                  </div>
                  <p className="font-acumin text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                    Para pacientes con patologías agudas o crónicas que
                    requieren atención médica y de enfermería de manera
                    frecuente, con un abordaje clínico más intensivo.
                  </p>
                  <ul className="font-acumin space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span>
                        Atención médica domiciliaria programada y de urgencia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span>Enfermería especializada</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span>Administración de tratamientos y curaciones</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span>
                        Coordinación con estudios complementarios a domicilio
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/images/plan-vital-card.png"
                    alt="Plan Vital"
                    width={520}
                    height={360}
                    className=" w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Vital */}
            <div
              id="plan-integral"
              className="relative overflow-hidden w-full py-10 md:py-12 lg:py-16 min-h-[75vh]"
            >
              {/* Imagen de fondo difuminada */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/images/light-geometric-bg.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                      </div>
                      <h3 className="font-cocogoose text-2xl sm:text-3xl font-bold">
                        Plan Integral
                      </h3>
                    </div>
                    <p className="font-acumin text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
                      Nuestro servicio más completo para pacientes con
                      necesidades complejas que requieren internación
                      domiciliaria de alta intensidad. Red de cuidados continua
                      y especializada.
                    </p>
                    <ul className="font-acumin space-y-2 sm:space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-200 mt-0.5 mr-2" />
                        <span>Internación domiciliaria con cobertura 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-200 mt-0.5 mr-2" />
                        <span>
                          Equipamiento médico en el hogar (oxígeno, camas/bombas
                          de infusión, etc.)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-200 mt-0.5 mr-2" />
                        <span>Equipo multidisciplinario especializado</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-200 mt-0.5 mr-2" />
                        <span>Monitoreo continuo de signos vitales</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-200 mt-0.5 mr-2" />
                        <span>Cuidados paliativos especializados</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative order-1 lg:order-2">
                    <Image
                      src="/images/plan-integral-card.png"
                      alt="Plan Integral"
                      width={520}
                      height={360}
                      className=" w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
