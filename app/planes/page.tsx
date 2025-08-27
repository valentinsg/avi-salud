import { PlansGrid } from '@/components/plans/PlansGrid'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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

        {/* Curva superior, un poco más arriba */}
        <div className="absolute -top-9 md:top-5 lg:-top-9 left-0 right-0 hidden md:block">
          <svg
            className="w-full h-48 sm:h-56 md:h-72 lg:h-96"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFFFF"
              d="M0,0 L0,200 H350 C400,200 450,140 500,140 S920,140 1000,140 H1440 L1440,0 Z"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="container mx-auto px-4 text-left relative z-20 mb-16 pt-8 md:pt-12">
          <h1 className="font-acumin text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight max-w-[280px] md:max-w-none">
            <span className="inline text-xl md:text-2xl lg:text-3xl text-teal-600 md:hidden lg:inline">
              Nuestros{' '}
            </span>
            <span className="inline text-xl md:text-2xl lg:text-3xl text-teal-900">
              Planes
            </span>
          </h1>
        </div>
        {/* Content */}
        <div className="container relative z-20 flex flex-col justify-center items-center font-congoose pt-12 md:pt-16 lg:pt-20 mx-auto px-4 sm:px-4">

          <p className="text-teal-50 text-2xl font-acumin mt-2 mb-20">
            Planes de Salud Complementarios Diseñados para el domicilio.
          </p>
          <PlansGrid
            useWhatsApp={false}
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
                  Orientado a brindar contención, apoyo y seguimiento a
                  pacientes que requieren supervisión o asistencia básica en el
                  hogar. Ideal para personas mayores o en recuperación leve,
                  incluye servicios como:
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
          <div className="flex items-center gap-2 justify-center">
            <Image
              src="/images/avi-logo-blanco.png"
              alt="Avi Salud"
              width={100}
              height={100}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-acumin font-light text-teal-50 text-center">
              Requerimientos incluidos en Plan Acompañar en tu hogar:
            </h3>
          </div>
        </div>


        {/* Lista detallada de servicios incluidos en Plan Acompañar */}
        <div className="relative w-full py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <Accordion type="multiple" className="w-full space-y-4">
              {/* Columna izquierda */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <AccordionItem
                    value="admision"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      ADMISIÓN CLÍNICA - 1 CONSULTA / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Visita programada de un médico general al ingreso.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="medicina"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      MÉDICINA CLÍNICA - 2 CONSULTAS / MES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Consultas virtuales programadas de un médico
                        generalista.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="odontologia"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      ODONTOLOGÍA - 1 CONSULTA / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Visita programada de control para garantizar la salud
                        bucal.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="rehabilitacion"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      REHABILITACIÓN - 5 SESIONES / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Ejercicios supervisados para mejorar la movilidad.
                        Fisioterapia, kinesiología, Fonoaudiología o terapia
                        ocupacional ligera.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="nutricion"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      NUTRICIÓN - 2 CONSULTAS / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Plan alimenticio personalizado con seguimiento.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="salud-mental"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      SALUD MENTAL - 2 SESIONES / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Psicología y/o terapia emocional.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </div>

                {/* Columna derecha */}
                <div className="space-y-4">
                  <AccordionItem
                    value="enfermeria"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      ENFERMERÍA - 1 VISITA / MES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Toma de signos vitales (presión arterial, temperatura,
                        frecuencia cardíaca). Administración de medicamentos
                        prescritos (oral, tópico o inyectable). Curaciones
                        simples de heridas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="cuidador"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      CUIDADOR - 60 HORAS / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Se habilitan 15 horas por trimestre.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="analisis"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      ANÁLISIS CLÍNICOS - 1 CONTROL / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        APB, Hemograma, Eritrosedimentación, Proteína C
                        reactiva, Glucemia, Perfil lipoproteico básico,
                        Hepatograma, Gamma glutamil transpeptidasa, Uremia,
                        Tonograma sérico, Calcemia, Magnesemia, Fosfatemia, TSH,
                        T4 libre, Uricemia, Albuminemia, Proteínas totales,
                        Vitamina D total, Vitamina B12, Ácido fólico, PSA -
                        antígeno prostático específico. A partir del 3er mes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="diagnostico"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      DIAGNÓSTICO POR IMÁGEN - 1 PRÁCTICA / AÑO
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Estudios de imagenología, ecografías.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="traslados"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      TRASLADOS EN AMBULANCIA - 2 TRASLADOS / MES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Servicios de traslado y asistencia en casos de
                        emergencia, priorizando la seguridad del paciente, hasta
                        2 por mes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>

            {/* Sección inferior que abarca ambas columnas */}
            <div className="mt-12 rounded-3xl bg-avi-teal-bright/40">
              <h4 className="text-xl font-acumin  text-white bg-avi-teal-bright text-left py-2 rounded-2xl pl-10 font-medium">
                INCLUYE:
              </h4>
              <p className="text-gray-800 bg-avi-teal-bright/05 rounded-b-3xl font-normal px-5 pb-3 pt-2 font-acumin text-left text-lg">
                Coordinador/a de ID especializado. Personal administrativo
                (gestión de autorizaciones y registros). Historia Clínica
                Digital avanzada (registros, asistencias, evoluciones, alertas).
                Agenda de servicios priorizada. Seguimiento telefónico semanal.
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Vital */}
          <div
            id="plan-vital"
            className="relative overflow-hidden w-full py-8 md:py-10 lg:py-12 min-h-[90vh] flex items-center"
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
                    Pensado para pacientes con patologías agudas o crónicas que
                    requieren atención médica y de enfermería de manera
                    frecuente, este plan ofrece un abordaje clínico más
                    intensivo:
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
                          Enfermería especializada en tratamientos
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

          <div className="relative w-full py-2 flex bg-avi-teal-medium items-center justify-center">
            <div className="flex items-center gap-2 justify-center">
              <Image
                src="/images/avi-logo-blanco.png"
                alt="Avi Salud"
                width={100}
                height={100}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-acumin font-light text-teal-50 text-center">
                Requerimientos incluidos en Plan Vital en tu hogar:
              </h3>
            </div>
          </div>

          {/* Lista detallada de servicios incluidos en Plan Vital */}
          <div className="relative w-full py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <Accordion type="multiple" className="w-full space-y-4">
                {/* Columna izquierda */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-4">
                    <AccordionItem
                      value="medicina-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        MÉDICINA CLÍNICA - 4 CONSULTAS / MES
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Consultas presenciales y virtuales con médico
                          generalista y especialistas según necesidad.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="enfermeria-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        ENFERMERÍA - 3 VISITAS / MES
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Toma de signos vitales, administración de
                          medicamentos, curaciones complejas y monitoreo de
                          tratamientos.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="rehabilitacion-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        REHABILITACIÓN - 8 SESIONES / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Fisioterapia, kinesiología, fonoaudiología o terapia
                          ocupacional especializada según patología.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="nutricion-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        NUTRICIÓN - 4 CONSULTAS / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Plan alimenticio personalizado con seguimiento
                          nutricional especializado.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="salud-mental-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        SALUD MENTAL - 4 SESIONES / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Psicología clínica y terapia emocional especializada.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  {/* Columna derecha */}
                  <div className="space-y-4">
                    <AccordionItem
                      value="cuidador-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        CUIDADOR - 120 HORAS / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Se habilitan 30 horas por trimestre con personal
                          especializado en patologías moderadas.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="analisis-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        ANÁLISIS CLÍNICOS - 2 CONTROLES / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Perfil completo incluyendo marcadores específicos para
                          patologías crónicas, control de medicamentos y
                          seguimiento de parámetros clínicos.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="diagnostico-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        DIAGNÓSTICO POR IMÁGEN - 2 PRÁCTICAS / AÑO
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Estudios de imagenología avanzados, ecografías
                          especializadas y resonancias según indicación médica.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="traslados-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        TRASLADOS EN AMBULANCIA - 4 TRASLADOS / MES
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Servicios de traslado y asistencia en casos de
                          emergencia y consultas programadas, priorizando la
                          seguridad del paciente.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="equipamiento-vital"
                      className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                    >
                      <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                        EQUIPAMIENTO MÉDICO - SEGÚN NECESIDAD
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                        <p className="text-gray-700 text-lg font-acumin">
                          Oxigenoterapia, monitores de signos vitales, bombas de
                          infusión y equipos de rehabilitación según
                          prescripción médica.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              </Accordion>

              {/* Sección inferior que abarca ambas columnas */}
              <div className="mt-12 rounded-3xl bg-avi-teal-bright/40">
                <h4 className="text-xl font-acumin  text-white bg-avi-teal-bright text-left py-2 rounded-2xl pl-10 font-medium">
                  INCLUYE:
                </h4>
                <p className="text-gray-800 bg-avi-teal-bright/05 rounded-b-3xl font-normal px-5 pb-3 pt-2 font-acumin text-left text-lg">
                  Coordinador/a de ID especializado. Personal administrativo
                  (gestión de autorizaciones y registros). Historia Clínica
                  Digital avanzada (registros, asistencias, evoluciones,
                  alertas). Agenda de servicios priorizada. Seguimiento
                  telefónico semanal.
                </p>
              </div>
            </div>
          </div>

          <div>
            {/* Integral */}
            <div
              id="plan-integral"
              className="bg-avi-teal-medium relative overflow-hidden w-full py-16 md:py-20 lg:py-24 min-h-[90vh] flex items-center"
            >
              <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-8 px-4 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 items-center max-w-6xl mx-auto">
                  <div className="order-2 lg:order-1 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-10 text-avi-teal-bright" />
                      </div>
                      <div className="leading-none text-white">
                        <span className="block font-acumin text-avi-teal-bright font-semibold text-2xl sm:text-5xl">
                          Plan Integral
                        </span>
                      </div>
                    </div>
                    <p className="font-acumin text-base md:text-lg text-teal-50 leading-relaxed tracking-tight mb-8 sm:mb-10 max-w-2xl text-left">
                      Ideal para: Pacientes con enfermedades complejas,
                      terminales o en rehabilitación intensiva que requieren
                      atención integral y constante.
                    </p>
                    <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 md:px-14 max-w-4xl">
                      <ul className="font-acumin text-sm md:text-base text-teal-900 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Atención Médica Integral
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Asistencia Telefónica 24/7
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Odontología
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Rehabilitación Intensiva
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Nutrición Enteral/Parenteral
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Salud Mental
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Servicios De Enfermería
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Servicio De Cuidadores
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Análisis De Sangre
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Diagnóstico Por Imágen
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Traslados Y Emergencias
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Historia Clínica Digital
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Agenda De Atención Personal
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Suministro Básico De Insumos
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-avi-teal-medium font-semibold">
                            Equipamientos Médicos Especializados
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Información de contratación */}
                    <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl mt-6">
                      <p className="font-acumin text-sm md:text-base text-avi-teal-medium leading-relaxed text-left">
                        <span className="font-semibold">Contratación:</span>{' '}
                        Plan de contratación por presupuesto de acuerdo a
                        requerimientos médicos.
                      </p>
                    </div>
                  </div>

                  {/* Columna derecha - Imagen y Partnership */}
                  <div className="order-1 lg:order-2 space-y-14 flex flex-col items-center lg:items-start">
                    <Link
                      href={buildWhatsAppHref('Plan Integral')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-[40px] sm:rounded-[48px] transition-transform duration-500 ease-out hover:-translate-y-2"
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

                    {/* Sección Partnership debajo de la imagen */}
                    <div className="bg-transparent p-6 max-w-3xl relative">
                      {/* Pestaña superior */}
                      <div className="absolute -top-4 bg-avi-teal-bright px-4 py-3 rounded-t-2xl">
                        <h4 className="font-acumin text-lg font-bold text-white">
                          PARTNERSHIP
                        </h4>
                      </div>

                      {/* Contenido principal */}
                      <div className="py-5 px-4 bg-avi-teal-bright shadow-xl rounded-b-2xl rounded-tr-2xl">
                        <p className="font-acumin text-base md:text-lg text-white leading-relaxed mb-3 text-left font-medium">
                          Innovación Colaborativa al Servicio del Paciente
                        </p>
                        <p className="font-acumin text-sm md:text-base text-white leading-relaxed text-left">
                          En un momento crucial para el sistema de salud, donde
                          los desafíos de sostenibilidad, integración y calidad
                          exigen soluciones transformadoras, surge una alianza
                          estratégica que se consolida sobre pilares de
                          complementariedad, experiencia e innovación.
                        </p>
                      </div>
                    </div>
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
