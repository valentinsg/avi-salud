import PlansBreadcrumb from '@/components/PlansBreadcrumb'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Activity, ArrowDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlanVitalPage() {
  const buildWhatsAppHref = (planTitle: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5492235306250'
    const text = encodeURIComponent(
      `Quiero consultar sobre este plan: ${planTitle}`
    )
    return `https://wa.me/${phone}?text=${text}`
  }

  return (
    <div className="min-h-screen bg-[#F0FDFA] pt-10 md:pt-20 ">
      {/* Vital */}
      <section className="relative w-full  bg-white ">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-left justify-left z-40 mb-4">
            <PlansBreadcrumb
              currentPlan="Plan Vital"
              currentPlanPath="/planes/vital"
              textColor="text-teal-700"
            />
          </div>

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

          <div className="container h-[100vh] md:h-[75vh] relative z-20 flex flex-col items-center justify-center font-congoose mx-auto mb-10 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
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
                <span className="block font-bold font-acumin text-avi-teal-bright text-base sm:text-lg mb-3 sm:mb-2 mt-3 sm:mt-4">
                  Periodo de contratación trimestral.
                </span>
                <p className="font-acumin text-base md:text-lg text-teal-50 leading-relaxed tracking-tight mb-6 sm:mb-8 max-w-md">
                  Pensado para pacientes con patologías agudas o crónicas que
                  requieren atención médica y de enfermería de manera frecuente,
                  este plan ofrece un abordaje clínico más intensivo:
                </p>
                <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 max-w-md">
                  <ul className="font-acumin text-base md:text-lg text-teal-900 leading-relaxed space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-600 mt-0.5 mr-2" />
                      <span className="text-teal-700 font-semibold">
                        Atención médica en el hogar para resolver consultas habituales, sin necesidad de traslado.
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
                  src="/images/partners-estrategicos.png"
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
                      MEDICINA CLÍNICA - UNA CONSULTA TRIMESTRAL
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Atención médica en el hogar para resolver consultas habituales, sin necesidad de traslado.
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
                        Toma de signos vitales (presión arterial, temperatura, frecuencia cardíaca). Administración de medicamentos prescritos (oral, tópico o inyectable). Curaciones simples de heridas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="rehabilitacion-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      REHABILITACIÓN - 8 SESIONES TRIMESTRALES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Ejercicios supervisados para mejorar la movilidad. Fisioterapia, kinesiología, Fonoaudiología o terapia ocupacional ligera.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="nutricion-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      PLAN NUTRICIONAL - 2 VISITAS TRIMESTRALES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Visita en domicilio para crear un plan de alimentación acorde a las necesidades de la persona y condiciones clínicas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="salud-mental-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      SALUD MENTAL - 2 SESIONES TRIMESTRALES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Visita en domicilio para evaluar el bienestar emocional y diseñar un plan de acompañamiento acorde a las necesidades de la persona y sus circunstancias médicas; con seguimiento digitalizado durante todo el proceso. especializada.
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
                      CUIDADOR DOMICILIARIO - 72 HS TRIMESTRALES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        El plan incluye 72 horas para brindar cuidado y acompañamiento en el hogar.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="analisis-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      ANÁLISIS CLÍNICOS - UN CONTROL TRIMESTRAL
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        APB, Hemograma, Eritrosedimentación, Proteína C reactiva, Glucemia, Perfil lipoproteico básico, Hepatograma, Gamma glutamil transpeptidasa, Uremia, Tonograma sérico, Calcemia, Magnesemia, Fosfatemia, TSH, T4 libre, Uricemia, Albuminemia, Proteínas totales, Vitamina D total, Vitamina B12, Ácido fólico, PSA - antígeno prostático específico.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="diagnostico-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      DIAGNÓSTICO POR IMAGEN - UNA PRÁCTICA TRIMESTRAL
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Estudios de imagenología avanzados, ecografías especializadas y resonancias según indicación médica.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="traslados-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      TRASLADOS EN AMBULANCIA - 2 TRASLADOS MENSUALES
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Servicios de traslado y asistencia en casos de emergencia.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="equipamiento-vital"
                    className="border-none rounded-2xl bg-avi-teal-bright shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-2 text-white font-bold hover:text-gray-100 font-acumin text-lg text-center">
                      KIT DE INSUMOS
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 bg-white rounded-b-2xl pt-4">
                      <p className="text-gray-700 text-lg font-acumin">
                        Incluye elementos de higiene y suministros médicos básicos para el hogar, pensados para acompañar la atención y el cuidado diario.
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
      </section>
    </div>
  )
}
