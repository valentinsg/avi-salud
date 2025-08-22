import PlansBreadcrumb from '@/components/PlansBreadcrumb'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowDown, ChevronRight, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlanAcompanarPage() {
  const buildWhatsAppHref = (planTitle: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5492235306250'
    const text = encodeURIComponent(
      `Quiero consultar sobre este plan: ${planTitle}`
    )
    return `https://wa.me/${phone}?text=${text}`
  }

  return (
    <div className="min-h-screen bg-[#F0FDFA] pt-10 md:pt-20">
      {/* Descripción del Plan */}
      <section className="relative w-full py-16 bg-white ">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-left justify-left z-40">
          <PlansBreadcrumb
            currentPlan="Plan Acompañar"
            currentPlanPath="/planes/acompanar"
            textColor="text-teal-700"
          />
          </div>

          {/* Imagen de fondo difuminada */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/light-geometric-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="container h-[100vh] md:h-[75vh] relative z-20 flex flex-col items-center justify-center font-congoose mx-auto mb-10 px-4 sm:px-6">
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
      </section>
    </div>
  )
}
