import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CorporativoPage() {
  return (
    <div className="min-h-screen bg-teal-900">
      {/* Header Section */}
      <section className="relative py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Image
            src="/images/teal-gradient-bg.png"
            alt="Fondo de degradado azul"
            fill
            className="object-cover object-center md:object-[center_12%] w-full h-full blur-xs opacity-40 shadow-lg z-0"
          />

          {/* Curva superior, un poco más arriba */}
          <div className="absolute -top-10 left-0 right-0 hidden md:block">
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

          {/* Title */}
          <div className="text-left relative z-20 mb-16 pt-8 md:pt-16">
            <h1 className="font-acumin text-4xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
              <span className="inline text-3xl md:text-4xl lg:text-4xl text-teal-600">SERVICIOS </span>
              <span className="inline text-teal-900">CORPORATIVOS</span>
            </h1>
          </div>

          <div className="flex flex-col items-center py-10 md:py-16 justify-center">
            {/* Main content */}
            <div className="relative z-20 max-w-full mx-auto text-center mb-16">
              <h2 className="font-cocogoose text-left max-w-7xl text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Soluciones estratégicas de internación domiciliaria para
                financiadores y prestadores de salud.
              </h2>
              <p className="text-lg md:text-2xl max-w-6xl pt-8 mx-auto text-white leading-relaxed tracking-wide">
                AVI Salud ofrece una propuesta eficiente y humanizada que
                permite descongestionar el sistema hospitalario, reducir costos
                operativos y elevar la experiencia del paciente. Nuestra
                división Empresas se adapta a las necesidades de:
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Four Panel Layout Section */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
          {/* Columna izquierda 50% */}
          <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[36rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
            <Image
              src="/images/light-geometric-bg.png"
              alt="Fondo de fondo geometrico"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover object-center m-auto z-0"
            />
            {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
            <div className="relative max-w-2xl mx-auto">
              {/* Título superpuesto */}
              <div className="absolute -top-16 md:-top-24 lg:-top-28 z-10 flex items-center">
                <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square bg-white rounded-full overflow-hidden mr-4 border-2 border-teal-500 shadow-md flex-shrink-0">
                  <Image
                    src="/images/build.jpg"
                    alt="Building"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="font-cocogoose text-2xl md:text-3xl font-bold text-teal-600 uppercase leading-tighter">
                  Gestión integral de salud ocupacional para empresas
                </h3>
              </div>
              {/* Contenedor verde */}
              <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                <p>
                  AVI Salud colabora con empresas y organizaciones en la gestión
                  integral de la salud de sus equipos de trabajo, brindando
                  servicios médicos dinámicos, eficaces y adaptados a cada
                  necesidad.
                </p>
                <p className="mt-4">
                  Nos especializamos en la prevención, el control y el
                  seguimiento de la salud ocupacional, con un abordaje centrado
                  en la eficiencia y la personalización.
                </p>
                <p className="mt-4">
                  Nuestra propuesta contribuye a disminuir el ausentismo,
                  anticipar factores de riesgo, mejorar el desempeño
                  organizacional y consolidar un entorno laboral saludable y
                  comprometido con el bienestar de las personas.
                </p>
              </div>
            </div>
          </div>
          {/* Top Right Panel - Imagen de edificios */}
          <div className="relative overflow-hidden w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-auto lg:min-h-full rounded-bl-lg">
            <Image
              src="/images/foto-edificio-avi.webp"
              alt="Edificios corporativos"
              fill
              className="object-cover object-center saturate-150 contrast-150"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-teal-600/10 to-transparent z-10"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
          {/* Top Right Panel - Imagen de edificios */}
          <div className="relative overflow-hidden w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-auto lg:min-h-full rounded-tr-lg">
            <Image
              src="/images/nurse-patient.webp"
              alt="Edificios corporativos"
              fill
              className="object-cover object-center saturate-150 contrast-150"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-teal-600/10 to-transparent z-10"></div>
          </div>
          {/* Columna izquierda 50% */}
          <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[36rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
            <Image
              src="/images/light-geometric-bg.png"
              alt="Fondo de fondo geometrico"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover object-center m-auto z-0 -scale-x-100"
            />
            {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
            <div className="relative max-w-2xl mx-auto">
              {/* Título superpuesto */}
              <div className="absolute -top-20 md:-top-28 lg:-top-32 z-10 gap-4 flex items-center">
                <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square rounded-full overflow-hidden mr-4 bg-white border-2 border-teal-500 shadow-md flex-shrink-0">
                  <Image
                    src="/images/build-healthcare.jpg"
                    alt="Building"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="font-cocogoose text-2xl md:text-3xl font-bold text-teal-600 uppercase leading-tighter">
                  PARTNERS ESTRATÉGICOS PARA EMPRESAS FINANCIADORAS DE SALUD
                </h3>
              </div>
              {/* Contenedor verde */}
              <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                <p>
                  AVI Salud es el socio ideal para empresas de medicina
                  prepagas, obras sociales y mutuales en Mar del Plata y la
                  región.
                </p>
                <p className="mt-4">
                  Nuestro servicio complementa su oferta médica con internación
                  domiciliaria de excelencia, mediante un modelo innovador de
                  atención post-hospitalaria que traslada la recuperación de
                  pacientes clínicamente estables desde hospitales o clínicas
                  hacia sus hogares.
                </p>
                <p className="mt-4">
                  Enfocamos nuestra gestión en reducir costos prestacionales,
                  sin comprometer la calidad de la atención médica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


