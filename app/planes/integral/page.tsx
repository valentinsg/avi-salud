import PlansBreadcrumb from '@/components/PlansBreadcrumb'
import { ArrowDown, Stethoscope } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlanIntegralPage() {
  const buildWhatsAppHref = (planTitle: string) => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5492235306250'
    const text = encodeURIComponent(
      `Quiero consultar sobre este plan: ${planTitle}`
    )
    return `https://wa.me/${phone}?text=${text}`
  }

  return (
    <div className="min-h-screen bg-avi-teal-medium pt-10 md:pt-20 ">
      {/* Descripción del Plan */}
      <section className="relative w-full py-16 ">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-left justify-left z-40">
            <PlansBreadcrumb
              currentPlan="Plan Integral"
              currentPlanPath="/planes/integral"
              textColor="text-teal-700"
            />
          </div>

          <div className="container relative z-20 flex flex-col items-center justify-center font-congoose mx-auto py-6 px-4 sm:px-10">
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
                <p className="font-acumin text-base md:text-lg text-teal-50 leading-relaxed tracking-tight mb-4 sm:mb-8 max-w-2xl text-left">
                  Ideal para: Pacientes con enfermedades complejas, terminales o
                  en rehabilitación intensiva que requieren atención integral y
                  constante.
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
              </div>

              {/* Columna derecha - Imagen y Partnership */}
              <div className="order-1 lg:order-2 space-y-6 mt-6 flex flex-col items-center lg:items-start">
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
                <div className="bg-transparent max-w-3xl relative">
                  {/* Pestaña superior */}
                  {/* Información de contratación */}
                  <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl mt-6">
                    <p className="font-acumin text-sm md:text-base text-avi-teal-medium leading-relaxed text-left">
                      <span className="font-semibold">Contratación:</span>{' '}
                      Mediante presupuesto de acuerdo a
                      requerimientos médicos.
                    </p>
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
