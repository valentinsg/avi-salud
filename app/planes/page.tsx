import { PlansGrid } from '@/components/plans/PlansGrid'
import {
  Activity,
  ArrowDown,
  ChevronRight,
  Plus,
  Stethoscope
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
        <div className="container relative z-20 flex flex-col justify-center items-center font-congoose mx-auto px-4 sm:px-5">
          <div className="text-left relative z-20 mb-12 md:mb-16 pt-6 self-start">
            <h1 className="font-acumin text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-50 sm:text-teal-600">
                NUESTROS
              </span>
              <span className="block text-teal-50 sm:text-teal-900">PLANES</span>
            </h1>
          </div>
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
          className="relative overflow-hidden w-full py-8 md:py-10 lg:py-12 min-h-[80vh]"
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
                  Orientado a brindar contención, apoyo y seguimiento a
                  pacientes que requieren supervisión o asistencia leve en el
                  hogar. Ideal para adultos mayores o personas en recuperación
                  leve.
                </p>
                <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 max-w-md">
                  <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Supervisión y asistencia leve en el hogar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Ideal para adultos mayores
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Contención y apoyo emocional
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Seguimiento de recuperación
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href={buildWhatsAppHref('Plan Acompañar')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative order-1 lg:order-2 w-full overflow-hidden rounded-[40px] sm:rounded-[48px] transition-transform duration-500 ease-out hover:-translate-y-2"
              >
                <Image
                  src="/images/plan-acompanar-card.png"
                  alt="Plan Acompañar"
                  width={560}
                  height={500}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="w-full h-auto object-cover"
                  style={{ borderRadius: 'inherit' }}
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm shadow-[0_8px_18px_rgba(0,0,0,0.12)] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ring-1 ring-teal-200/60">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div className="absolute left-3 bottom-3 sm:left-5 sm:bottom-5 bg-white rounded-[22px] sm:rounded-[32px] px-4 sm:px-6 py-2.5 sm:py-4 shadow-[0_12px_28px_rgba(0,0,0,0.12)] flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-teal-600 text-white flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-acumin text-teal-800 text-sm sm:text-lg font-semibold">Plan Acompañar</span>
                </div>
              </Link>
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
                    width={520}
                    height={360}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="w-full h-auto object-cover transition-transform duration-500 border-none"
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
              className="relative overflow-hidden w-full py-10 md:py-12 lg:py-16 min-h-[80vh]"
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
                      width={520}
                      height={360}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className="w-full h-auto object-cover transition-transform duration-500 border-none"
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
