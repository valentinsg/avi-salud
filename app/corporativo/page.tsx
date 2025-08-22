import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

export default function CorporativoPage() {
  return (
    <div className="min-h-screen bg-teal-900">
      {/* Header Section */}
      <section className="relative py-10 md:py-20 h-[90vh]">
        <Image
          src="/images/teal-gradient-bg.png"
          alt="Fondo de degradado azul"
          fill
          className="object-cover object-center md:object-[center_12%] w-full h-full blur-xs opacity-40 shadow-lg z-0"
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
        <div className="text-left relative z-20 mb-4 sm:mb-16 pt-6 sm:pt-8 md:pt-12 ml-2 sm:ml-2 md:ml-2 lg:ml-[7%]">
          <h1 className="font-acumin mt-10 sm:mt-0 md:mt-0 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight max-w-[250px] sm:max-w-[280px] md:max-w-none">
            <span className="inline text-2xl sm:text-xl md:text-2xl lg:text-3xl text-white md:text-avi-teal-bright md:hidden lg:inline">
              Servicios{' '}
            </span>
            <span className="inline text-2xl sm:text-xl md:text-2xl lg:text-3xl text-white md:text-avi-teal-medium">
              Corporativos
            </span>
          </h1>
        </div>

        <div className="container mx-auto px-4 sm:px-6 h-[85%] flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            {/* Main content */}
            <div className="relative z-20 max-w-full mx-auto text-left px-2 sm:px-0">
              <h2
                className="font-cocogoose text-left max-w-full sm:max-w-7xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                style={{ lineHeight: '1.25' }}
              >
                Soluciones estratégicas de internación domiciliaria para
                financiadores y prestadores de salud.
              </h2>
              <p className="text-base sm:text-lg md:text-2xl max-w-full sm:max-w-6xl pt-4 sm:pt-8 text-white leading-relaxed tracking-wide">
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
      <section className="bg-white w-full">
        <div className="w-full">
          <Accordion type="multiple" className="w-full">
            {/* Primer Panel - Gestión integral de salud ocupacional */}
            <AccordionItem
              value="gestion-salud-ocupacional"
              className="border-b-2 border-avi-teal-medium bg-avi-teal-dark shadow-lg overflow-hidden w-full"
            >
              <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-6 text-white font-bold hover:text-gray-100 font-acumin text-base md:text-lg lg:text-xl text-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 lg:w-16 bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0">
                    <Image
                      src="/images/build.jpg"
                      alt="Building"
                      width={64}
                      height={64}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <span className="text-left leading-tight">
                    GESTIÓN INTEGRAL DE SALUD OCUPACIONAL PARA EMPRESAS
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 bg-white">
                <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
                  {/* Columna izquierda 50% */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[70vh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
                    <Image
                      src="/images/light-geometric-bg.png"
                      alt="Fondo de fondo geometrico"
                      fill
                      className="absolute "
                    />
                    {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
                    <div className="relative max-w-2xl mx-auto mb-12 md:mb-0 pt-12 md:pt-16">
                      {/* Título superpuesto */}
                      <div className="relative z-10 flex items-center gap-3 max-w-[280px] md:max-w-[450px] lg:max-w-[450px] mb-6">
                        <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0 mt-2">
                          <Image
                            src="/images/build.jpg"
                            alt="Building"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <h3 className="font-cocogoose text-md md:text-lg lg:text-xl font-bold text-teal-600 uppercase leading-tight text-wrap">
                          Gestión integral de salud ocupacional para empresas
                        </h3>
                      </div>
                      {/* Contenedor verde */}
                      <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                        <p>
                          AVI Salud colabora con empresas y organizaciones en la
                          gestión integral de la salud de sus equipos de
                          trabajo, brindando servicios médicos dinámicos,
                          eficaces y adaptados a cada necesidad.
                        </p>
                        <p className="mt-4">
                          Nos especializamos en la prevención, el control y el
                          seguimiento de la salud ocupacional, con un abordaje
                          centrado en la eficiencia y la personalización.
                        </p>
                        <p className="mt-4">
                          Nuestra propuesta contribuye a disminuir el
                          ausentismo, anticipar factores de riesgo, mejorar el
                          desempeño organizacional y consolidar un entorno
                          laboral saludable y comprometido con el bienestar de
                          las personas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Top Right Panel - Imagen de edificios */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[40rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0 pt-12 md:pt-16">
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
              </AccordionContent>
            </AccordionItem>

            {/* Segundo Panel - Partners estratégicos */}
            <AccordionItem
              value="partners-estrategicos"
              className="border-b-2 border-avi-teal-medium bg-avi-teal-dark shadow-lg overflow-hidden w-full"
            >
              <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-6 text-white font-bold hover:text-gray-100 font-acumin text-base md:text-lg lg:text-xl text-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 lg:w-16 bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0">
                    <Image
                      src="/images/build-healthcare.jpg"
                      alt="Building"
                      width={64}
                      height={64}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <span className="text-left leading-tight">
                    PARTNERS ESTRATÉGICOS PARA EMPRESAS FINANCIADORAS DE SALUD
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 bg-white">
                <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
                  {/* Top Right Panel - Imagen */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[70vh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0 pt-12 md:pt-16">
                    <Image
                      src="/images/laburantes-avi.jpg"
                      alt="Emergency Care"
                      fill
                      className="object-cover object-center saturate-150 contrast-150"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-teal-600/10 to-transparent z-10"></div>
                  </div>
                  {/* Columna izquierda 50% */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[40rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
                    <Image
                      src="/images/light-geometric-bg.png"
                      alt="Fondo de fondo geometrico"
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover object-center m-auto z-0 -scale-x-100"
                    />
                    {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
                    <div className="relative max-w-2xl mx-auto pt-12 md:pt-16 mb-12 md:mb-0">
                      {/* Título superpuesto */}
                      <div className="relative z-10 flex items-center gap-3 max-w-[280px] md:max-w-[450px] lg:max-w-[450px] mb-6">
                        <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square rounded-full overflow-hidden bg-white border-2 border-teal-500 shadow-md flex-shrink-0 mt-2">
                          <Image
                            src="/images/build-healthcare.jpg"
                            alt="Building"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-cocogoose text-md md:text-lg lg:text-xl font-bold text-teal-600 uppercase leading-tight text-wrap">
                          PARTNERS ESTRATÉGICOS PARA EMPRESAS FINANCIADORAS DE
                          SALUD
                        </h3>
                      </div>
                      {/* Contenedor verde */}
                      <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                        <p>
                          AVI Salud es el socio ideal para empresas de medicina
                          prepagas, obras sociales y mutuales en Mar del Plata y
                          la región.
                        </p>
                        <p className="mt-4">
                          Nuestro servicio complementa su oferta médica con
                          internación domiciliaria de excelencia, mediante un
                          modelo innovador de atención post-hospitalaria que
                          traslada la recuperación de pacientes clínicamente
                          estables desde hospitales o clínicas hacia sus
                          hogares.
                        </p>
                        <p className="mt-4">
                          Enfocamos nuestra gestión en reducir costos
                          prestacionales, sin comprometer la calidad de la
                          atención médica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Tercer Panel - Plan de Salud Preventiva */}
            <AccordionItem
              value="plan-salud-preventiva"
              className="border-b-2 border-avi-teal-medium bg-avi-teal-dark shadow-lg overflow-hidden w-full"
            >
              <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-6 text-white font-bold hover:text-gray-100 font-acumin text-base md:text-lg lg:text-xl text-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 lg:w-16 bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0">
                    <Image
                      src="/images/suitcase.jpg"
                      alt="Emergency Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-left leading-tight">
                    PLAN DE SALUD PREVENTIVA PARA EMPRESAS
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 bg-white">
                <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
                  {/* Columna izquierda 50% */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[70vh] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
                    <Image
                      src="/images/light-geometric-bg.png"
                      alt="Fondo de fondo geometrico"
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover object-center m-auto z-0"
                    />
                    {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
                    <div className="relative max-w-2xl mx-auto pt-12 md:pt-16 mb-12 md:mb-0">
                      {/* Título superpuesto */}
                      <div className="relative z-10 flex items-center gap-3 max-w-[280px] md:max-w-[450px] lg:max-w-[450px] mb-6">
                        <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0 mt-2">
                          <Image
                            src="/images/suitcase.jpg"
                            alt="Emergency Services"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-cocogoose text-md md:text-lg lg:text-xl font-bold text-teal-600 uppercase leading-tight text-wrap">
                          Soluciones médicas para empresas estrategicas para ART
                        </h3>
                      </div>
                      {/* Contenedor verde */}
                      <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                        <p>
                          AVI Salud es el aliado ideal para hospitales, clínicas
                          y centros médicos en Mar del Plata y la región que
                          buscan optimizar sus recursos sin resignar calidad de
                          atención.
                        </p>
                        <p className="mt-4">
                          Nuestros servicios complementan su estructura
                          prestacional mediante un modelo innovador de atención
                          post-hospitalaria que permite trasladar a pacientes
                          clínicamente estables, liberando camas y permitiendo
                          destinar ese espacio a casos de mayor complejidad.
                        </p>
                        <p className="mt-4">
                          De esta manera, promovemos una rotación más eficiente
                          de pacientes, reducción de costos operativos y
                          continuidad asistencial segura y humanizada, siempre
                          bajo estándares médicos rigurosos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Top Right Panel - Imagen */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[40rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0 pt-12 md:pt-16">
                    <Image
                      src="/images/laburantes-avi.jpg"
                      alt="Partners estratégicos"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-teal-600/10 to-transparent z-10"></div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cuarto Panel - Servicios de Emergencia */}
            <AccordionItem
              value="servicios-emergencia"
              className="border-b-2 border-avi-teal-medium bg-avi-teal-dark shadow-lg overflow-hidden w-full"
            >
              <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-6 text-white font-bold hover:text-gray-100 font-acumin text-base md:text-lg lg:text-xl text-center">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 lg:w-16 bg-white rounded-full overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0">
                    {/* Icono de cruz médica */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="w-full h-full object-cover text-teal-600"
                    >
                      <rect width="48" height="48" rx="24" fill="#fff" />
                      <path
                        d="M20 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8h-8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8v-8z"
                        fill="#14b8a6"
                      />
                    </svg>
                  </div>
                  <span className="text-left leading-tight">
                    ALIADOS ESTRATÉGICOS PARA PRESTADORAS DE SALUD
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 bg-white">
                <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
                  {/* Top Right Panel - Imagen */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-screen lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
                    <Image
                      src="/images/partners-estrategios.png"
                      alt="Aliados estratégicos para prestadoras de salud"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-teal-600/10 to-transparent z-10"></div>
                  </div>
                  {/* Columna izquierda 50% */}
                  <div className="relative w-full lg:w-1/2 min-h-[28rem] md:min-h-[40rem] lg:min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-0">
                    <Image
                      src="/images/light-geometric-bg.png"
                      alt="Fondo de fondo geometrico"
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover object-center m-auto z-0 -scale-x-100"
                    />
                    {/* Wrapper relativo para superponer el título sobre el contenedor verde */}
                    <div className="relative max-w-2xl mx-auto pt-8 md:pt-12 mb-12 md:mb-0">
                      {/* Título superpuesto */}
                      <div className="relative z-10 flex items-center gap-3 max-w-[280px] md:max-w-[400px] lg:max-w-[450px] mb-6">
                        <div className="relative w-[72px] h-[72px] md:w-[84px] md:h-[84px] aspect-square rounded-full overflow-hidden bg-white border-2 border-teal-500 shadow-md flex-shrink-0 mt-2">
                          {/* Icono de cruz médica */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="w-full h-full object-cover text-teal-600"
                          >
                            <rect width="48" height="48" rx="24" fill="#fff" />
                            <path
                              d="M20 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8h-8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8v-8z"
                              fill="#14b8a6"
                            />
                          </svg>
                        </div>
                        <h3 className="font-cocogoose text-md md:text-lg lg:text-xl font-bold text-teal-600 uppercase leading-tight text-wrap">
                          Aliados estratégicos para prestadoras de salud
                        </h3>
                      </div>
                      {/* Contenedor verde */}
                      <div className="bg-teal-600 text-base md:text-2xl text-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-14">
                        <p>
                          AVI Salud es el socio ideal para hospitales, clínicas
                          y centros médicos en Mar del Plata y la región que
                          buscan optimizar sus recursos sin resignar calidad de
                          atención.
                        </p>
                        <p className="mt-4">
                          Nuestro servicio complementan su estructura
                          prestacional mediante un modelo innovador de atención
                          post-hospitalaria que permite trasladar a pacientes
                          clínicamente estables, liberando camas y permitiendo
                          destinar ese espacio a casos de mayor complejidad.
                        </p>
                        <p className="mt-4">
                          De esta manera promovemos una rotación más eficiente
                          de pacientes, reducción de costos operativos y
                          continuidad asistencial segura y humanizada, siempre
                          bajo estándares médicos rigurosos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
