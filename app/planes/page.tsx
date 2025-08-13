import { PlansGrid } from '@/components/plans/PlansGrid'
import { Activity, ChevronRight, Heart, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlanesPage() {
  const buildWhatsAppHref = (planTitle: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5492235306250'
    const text = encodeURIComponent(`Quiero consultar sobre este plan: ${planTitle}`)
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
            <h1 className="font-cocogoose text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl text-teal-600">
                NUESTROS
              </span>
              <span className="block text-teal-900">PLANES</span>
            </h1>
          </div>
          <PlansGrid useWhatsApp whatsAppPhone={process.env.NEXT_PUBLIC_WHATSAPP_PHONE} />
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
                <p className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed tracking-tight mb-6 sm:mb-8">
                  Orientado a brindar contención, apoyo y seguimiento a
                  pacientes que requieren supervisión o asistencia leve en el
                  hogar. Ideal para adultos mayores o personas en recuperación
                  leve.
                </p>
                <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-2 sm:space-y-3">
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
              <Link
                href={buildWhatsAppHref('Plan Acompañar')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative order-1 lg:order-2 w-full h-full rounded-xl transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src="/images/plan-acompanar-card.png"
                  alt="Plan Acompañar"
                  width={560}
                  height={500}
                  className="rounded-xl w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
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
                  <p className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed tracking-tight mb-6 sm:mb-8">
                    Para pacientes con patologías agudas o crónicas que
                    requieren atención médica y de enfermería de manera
                    frecuente, con un abordaje clínico más intensivo.
                  </p>
                  <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-2 sm:space-y-3">
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
                <Link
                  href={buildWhatsAppHref('Plan Vital')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative order-1 lg:order-2 rounded-xl transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Image
                    src="/images/plan-vital-card.png"
                    alt="Plan Vital"
                    width={520}
                    height={360}
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
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
                    <p className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed tracking-tight mb-6 sm:mb-8">
                      Nuestro servicio más completo para pacientes con
                      necesidades complejas que requieren internación
                      domiciliaria de alta intensidad. Red de cuidados continua
                      y especializada.
                    </p>
                    <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-2 sm:space-y-3">
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
                  <Link
                    href={buildWhatsAppHref('Plan Integral')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative order-1 lg:order-2 rounded-xl transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <Image
                      src="/images/plan-integral-card.png"
                      alt="Plan Integral"
                      width={520}
                      height={360}
                      className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
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
