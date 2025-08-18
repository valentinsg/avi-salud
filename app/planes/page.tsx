import { PlansGrid } from '@/components/plans/PlansGrid'
import {
  Activity,
  ArrowDown,
  ChevronRight,
  Plus,
  Stethoscope,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlanesPage() {
  const buildWhatsAppHref = (planTitle: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5492235306250'
    const text = encodeURIComponent(
      `Quiero consultar sobre este plan: ${planTitle}`
    )
    return `https://wa.me/${phone}?text=${text}`
  }
  return (
    <div className="min-h-screen bg-[#F0FDFA]">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden w-full py-12 md:py-16 lg:py-20 min-h-[60vh] md:min-h-[75vh] lg:min-h-screen"
      >
        <Image
          src="/images/specialist-with-grandma-optimized.webp"
          alt="Enfermera cuidando paciente"
          fill
          className="object-cover object-center md:object-[center_32%] w-full h-full blur-xs shadow-lg z-0"
        />

        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0 hidden md:block">
          <svg
            className="w-full h-48 sm:h-56 md:h-72 lg:h-96"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFFFF"
              d="M0,0 L0,200 H420 C460,205 500,140 540,140 S920,140 1000,140 H1440 L1440,0 Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container relative z-20 flex flex-col justify-center items-center font-congoose mx-auto px-4 sm:px-4">
          <div className="text-left relative z-20 mb-12 md:mb-16 pt-6 self-start">
            <h1 className="font-cocogoose text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-50 sm:text-teal-600">
                Nuestros
              </span>
              <span className="block text-teal-50 sm:text-teal-900">
                Planes
              </span>
            </h1>
          </div>
          <p className="text-teal-50 text-2xl font-acumin mt-2 mb-8">
            Planes de Salud Complementarios Diseñados para el domicilio.
          </p>
          <PlansGrid
            useWhatsApp
            whatsAppPhone={process.env.NEXT_PUBLIC_WHATSAPP_PHONE}
          />
        </div>
      </section>

      {/* Secciones detalladas por plan */}
      <section id="planes" className="relative w-full">
        <div
          id="plan-acompanar"
          className="relative overflow-hidden w-full py-8 md:py-10 lg:py-12 min-h-[90vh] flex items-center"
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

          <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-3 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-700 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                  <div className="leading-none text-teal-700">
                    <span className="block font-acumin text-xl sm:text-2xl ">
                      Plan
                    </span>
                    <span className="block font-cocogoose text-3xl sm:text-4xl ">
                      Acompañar
                    </span>
                  </div>
                </div>
                <p className="font-acumin text-base md:text-lg text-teal-700 leading-relaxed tracking-tight mb-6 sm:mb-8 max-w-md">
                  Un plan de salud preventivo, enfocado en brindar servicios
                  esenciales para pacientes con necesidades básicas de atención
                  domiciliaria, o bien, un servicio de asistencia constante.
                </p>
                <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 max-w-md">
                  <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Acompañamiento domiciliario no médico
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Visitas periódicas de profesionales de la salud
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Control de signos vitales y medicación
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Comunicación constante con la familia
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href={buildWhatsAppHref('Plan Acompañar')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative order-1 lg:order-2 w-full overflow-hidden rounded-[40px] sm:rounded-[40px] transition-transform duration-500 ease-out hover:-translate-y-2"
              >
                <Image
                  src="/images/plan-acompanar-card.png"
                  alt="Plan Acompañar"
                  width={525}
                  height={500}
                  sizes="(min-width: 800px) 500px, 60vw"
                  style={{ borderRadius: 'inherit' }}
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm shadow-[0_8px_18px_rgba(0,0,0,0.12)] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ring-1 ring-teal-200/60">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full py-2 flex bg-avi-teal-medium items-center justify-center">
          <div className="flex items-center gap-2 mr-[47%]">
            <Image
              src="/images/avi-logo-blanco.png"
              alt="Avi Salud"
              width={100}
              height={100}
              className="w-12 h-12"
            />
            <h3 className="text-xl md:text-2xl font-acumin font-light text-teal-50 text-left">
              Requerimientos incluidos en Plan Acompañar en tu hogar:
            </h3>
          </div>
        </div>

        {/* Lista detallada de servicios incluidos en Plan Acompañar */}
        <div className="relative w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Columna izquierda */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    ADMISIÓN CLÍNICA - 1 CONSULTA / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Visita programada de un médico general al ingreso.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    MÉDICINA CLÍNICA - 2 CONSULTAS / MES
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Consultas virtuales programadas de un médico generalista.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    ODONTOLOGÍA - 1 CONSULTA / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Visita programada de control para garantizar la salud bucal.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    REHABILITACIÓN - 5 SESIONES / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Ejercicios supervisados para mejorar la movilidad.
                    Fisioterapia, kinesiología, Fonoaudiología o terapia
                    ocupacional ligera.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    NUTRICIÓN - 2 CONSULTAS / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Plan alimenticio personalizado con seguimiento.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    SALUD MENTAL - 2 SESIONES / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Psicología y/o terapia emocional.
                  </p>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    ENFERMERÍA - 1 VISITA / MES
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Toma de signos vitales (presión arterial, temperatura,
                    frecuencia cardíaca). Administración de medicamentos
                    prescritos (oral, tópico o inyectable). Curaciones simples
                    de heridas.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    CUIDADOR - 60 HORAS / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Se habilitan 15 horas por trimestre.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    ANÁLISIS CLÍNICOS - 1 CONTROL / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    APB, Hemograma, Eritrosedimentación, Proteína C reactiva,
                    Glucemia, Perfil lipoproteico básico, Hepatograma, Gamma
                    glutamil transpeptidasa, Uremia, Tonograma sérico, Calcemia,
                    Magnesemia, Fosfatemia, TSH, T4 libre, Uricemia,
                    Albuminemia, Proteínas totales, Vitamina D total, Vitamina
                    B12, Ácido fólico, PSA - antígeno prostático específico. A
                    partir del 3er mes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    DIAGNÓSTICO POR IMÁGEN - 1 PRÁCTICA / AÑO
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Estudios de imagenología, ecografías.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-cocogoose text-avi-teal-dark mb-3">
                    TRASLADOS EN AMBULANCIA - 2 TRASLADOS / MES
                  </h4>
                  <p className="text-gray-700 font-acumin">
                    Servicios de traslado y asistencia en casos de emergencia,
                    priorizando la seguridad del paciente, hasta 2 por mes.
                  </p>
                </div>
              </div>
            </div>

            {/* Sección inferior que abarca ambas columnas */}
            <div className="mt-12 bg-avi-teal-dark rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-cocogoose text-white mb-4 text-center">
                INCLUYE:
              </h4>
              <p className="text-white font-acumin text-center text-lg">
                Coordinador/a de ID. Personal administrativo (gestión de
                autorizaciones y registros). Historia Clínica Digital
                (registros, asistencias, evoluciones). Agenda de servicios.
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Vital */}
          <div
            id="plan-vital"
            className="relative overflow-hidden w-full py-10 md:py-12 lg:py-16 min-h-screen flex items-center"
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
            <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-3 px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-white shadow-md">
                      <ArrowDown className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="leading-none text-teal-50">
                      <span className="block font-acumin text-xl sm:text-2xl">
                        Plan
                      </span>
                      <span className="block font-cocogoose text-3xl sm:text-4xl">
                        Vital
                      </span>
                    </div>
                  </div>
                  <p className="font-acumin text-base md:text-lg text-teal-50 leading-relaxed tracking-tight mb-6 sm:mb-8 max-w-md">
                    Para pacientes con patologías agudas o crónicas que
                    requieren atención médica y de enfermería de manera
                    frecuente, con un abordaje clínico más intensivo.
                  </p>
                  <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 max-w-md">
                    <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                        <span className="text-teal-700 font-semibold">
                          Atención médica domiciliaria programada y de urgencia
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                        <span className="text-teal-700 font-semibold">
                          Enfermería especializada
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                        <span className="text-teal-700 font-semibold">
                          Administración de tratamientos y curaciones
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-teal-50 mt-0.5 mr-2" />
                        <span className="text-teal-700 font-semibold">
                          Coordinación con estudios complementarios a domicilio
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href={buildWhatsAppHref('Plan Vital')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative order-1 lg:order-2 w-full overflow-hidden rounded-[40px] sm:rounded-[48px] transition-transform duration-500 ease-out hover:-translate-y-2"
                >
                  <Image
                    src="/images/plan-vital-card.png"
                    alt="Plan Vital"
                    width={525}
                    height={500}
                    sizes="(min-width: 800px) 500px, 60vw"
                    style={{ borderRadius: 'inherit' }}
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm shadow-[0_8px_18px_rgba(0,0,0,0.12)] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ring-1 ring-teal-200/60">
                    <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {/* Vital */}
            <div
              id="plan-integral"
              className="relative overflow-hidden w-full py-10 md:py-12 lg:py-16 min-h-screen flex items-center"
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
              <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-3 px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-700 rounded-2xl flex items-center justify-center text-white shadow-md">
                        <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 text-teal-50" />
                      </div>
                      <div className="leading-none text-teal-700">
                        <span className="block font-acumin text-xl sm:text-2xl">
                          Plan
                        </span>
                        <span className="block font-cocogoose text-3xl sm:text-4xl">
                          Integral
                        </span>
                      </div>
                    </div>
                    <p className="font-acumin text-base md:text-lg text-teal-700 leading-relaxed tracking-tight mb-6 sm:mb-8 max-w-md">
                      Nuestro servicio más completo para pacientes con
                      necesidades complejas que requieren internación
                      domiciliaria de alta intensidad. Red de cuidados continua
                      y especializada.
                    </p>
                    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 max-w-md">
                      <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-3">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                          <span className="text-teal-700 font-semibold">
                            Internación domiciliaria con cobertura 24/7
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                          <span className="text-teal-700 font-semibold">
                            Equipamiento médico en el hogar (oxígeno,
                            camas/bombas de infusión, etc.)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                          <span className="text-teal-700 font-semibold">
                            Equipo multidisciplinario especializado
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                          <span className="text-teal-700 font-semibold">
                            Monitoreo continuo de signos vitales
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                          <span className="text-teal-700 font-semibold">
                            Cuidados paliativos especializados
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    href={buildWhatsAppHref('Plan Integral')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative order-1 lg:order-2 overflow-hidden rounded-[40px] sm:rounded-[48px] transition-transform duration-500 ease-out hover:-translate-y-2"
                  >
                    <Image
                      src="/images/plan-integral.png"
                      alt="Plan Integral"
                      width={525}
                      height={500}
                      sizes="(min-width: 800px) 500px, 60vw"
                      style={{ borderRadius: 'inherit' }}
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm shadow-[0_8px_18px_rgba(0,0,0,0.12)] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ring-1 ring-teal-200/60">
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
