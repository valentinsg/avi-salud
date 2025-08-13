import { ContactForm } from '@/components/ContactForm'
import { PlansGrid } from '@/components/plans/PlansGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Instagram, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0FDFA] overflow-hidden">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-[85vh] md:h-[80vh] lg:h-[100vh] w-full overflow-hidden"
      >
        <Image
          src="/images/nurse-patient-care.jpg"
          alt="Enfermera cuidando paciente"
          fill
          className="object-cover  w-full h-full mt-20"
        />
        <div className="absolute inset-0 bg-teal-300 bg-opacity-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-start md:items-center text-left px-2 sm:px-6 lg:px-10">
          <div className="container mx-auto">
            <div className="max-w-full sm:max-w-sm md:max-w-lg lg:max-w-xl font-medium mt-[55%] mr-8 md:mr-0 md:mt-20 md:ml-8 lg:ml-0 tracking-widest">
              <h1 className="font-cucumin leading-[0.9] text-4xl text-left sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-teal-50 drop-shadow-md">
                Cuidamos a<br />
                los que{' '}
                <span className="font-cucumin text-teal-50 md:text-teal-800 drop-shadow-md">
                  más
                </span>
                <br />
                <span className="font-cucumin text-teal-50 md:text-teal-800 drop-shadow-md">
                  {' '}
                  te cuidaron
                </span>
              </h1>

              {/* Botón visible solo en móvil, debajo del texto */}
              <div className="block md:hidden mt-6 text-left">
                <a href="/planes">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    conoce más
                    <ChevronRight className="ml-2 w-6 h-6 text-white font-bold" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg
            className="w-full h-24 sm:h-32 md:h-48 lg:h-56"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#F0FDFA"
              d="M0,600 C0,50 0,0 6700,7000 C350,345 600,100 450,100 C-1500,100 20,100 0,100 L0,350 L1440,320 Z"
            />
          </svg>
          <div className="absolute inset-0">
            <Image
              src="/images/light-geometric-bg.png"
              alt="Fondo geométrico"
              fill
              className="object-cover scale-100 opacity-80"
            />
            <div className="absolute inset-0"></div>
          </div>
        </div>

        {/* Button positioned in the white curved area - visible only on md and larger screens */}
        <div className="hidden md:block absolute bottom-40 sm:bottom-6 md:bottom-12 lg:bottom-14 left-1/2 md:left-[5%] lg:left-[10%] transform -translate-x-1/2 md:translate-x-0 lg:translate-x-0 z-5">
          <a href="/planes">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-10 sm:px-6 md:px-8 py-6 sm:py-4 md:py-6 lg:py-7 lg:px-12 font-bold text-xl sm:text-base md:text-2xl lg:text-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              conoce más
              <ChevronRight className="ml-1 sm:ml-2 w-4 sm:w-6 md:w-7 lg:w-8 h-4 sm:h-6 md:h-7 lg:h-8 text-white font-bold" />
            </Button>
          </a>
        </div>

        {/* Iconos de contacto en sidebar */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
          <div className="bg-teal-600 text-white space-y-1 rounded-l-2xl shadow-lg">
            {/* Mail */}
            <a
              href="mailto:info@avisalud.com.ar"
              aria-label="Enviar email"
              className="block py-3 sm:py-4 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <Mail className="w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/avisalud.mdp?igsh=MWNqNjhqZzVjNGNlbw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="block py-3 sm:py-4 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <Instagram className="w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5" />
            </a>
            {/* Facebook */}
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block py-3 sm:py-4 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <Facebook className="w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5" />
            </a> */}
            {/* WhatsApp */}
            <a
              href="https://wa.me/5492235306250"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="block py-3 sm:py-4 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <svg
                className="w-4 sm:w-5 md:w-5 lg:w-5 h-4 sm:h-5 md:h-5 lg:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Responsive */}
      <section
        id="nosotros"
        className="relative h-auto py-4 md:py-12 bg-[#F0FDFA] overflow-hidden -mt-4 md:mt-0"
      >
        {/* Background with geometric pattern */}
        <div className="absolute inset-0">
          <Image
            src="/images/light-geometric-bg.png"
            alt="Fondo geométrico"
            fill
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/linea-sobre-nosotros.png"
            alt="Decoración sobre nosotros"
            width={1200}
            height={400}
            className="absolute bottom-[-12px] md:bottom-[-16px] lg:bottom-[-40px] left-0 w-[80%] md:w-[60%] lg:w-[55%] h-auto pointer-events-none"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="mx-auto relative md:top-[20%] px-4 md:px-6 py-12 md:py-20 z-3 flex justify-center items-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Panel - Sobre Nosotros */}
            <div className="bg-teal-800 rounded-3xl max-w-xl md:max-w-lg px-8 text-white relative shadow-2xl py-20 mt-auto md:mx-auto">
              {/* Heart icon positioned absolutely */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/images/home-avi.png"
                  alt="Logo AVI Salud"
                  width={60}
                  height={60}
                  className="bg-teal-50 rounded-full"
                />
              </div>
              <h2 className="font-cocogoose leading-[0.9] text-left mb-1 md:mb-4">
                <span className="font-cocogoose leading-[0.9] text-teal-500 text-3xl md:text-5xl text-shadow-lg font-bold">
                  Sobre
                </span>
                <br />
                <span className="font-cocogoose leading-[0.9] text-teal-50 text-3xl md:text-5xl text-shadow-lg font-bold">
                  Nosotros
                </span>
              </h2>

              <p
                className="text-lg md:text-xl mt-4 md:mt-0 mb-6 md:mb-8 text-white text-left"
                style={{ fontFamily: 'Acumin Variable Concept, sans-serif' }}
              >
                Somos una empresa de internación domiciliaria cuyo propósito
                esencial se encuentra reflejado en su propio nombre:
              </p>

              <div className="text-left -mb-4 md:-mb-0">
                <a href="#contacto">
                  <Button className="bg-teal-50 hover:bg-teal-700 hover:text-white text-teal-600 font-bold rounded-full px-6 py-2 text-base">
                    Contáctanos
                  </Button>
                </a>
              </div>
            </div>

            {/* Center Panel - Doctor Image */}
            <div className="bg-transparent rounded-3xl p-4 relative md:flex md:justify-center">
              <div
                className="relative rounded-3xl flex flex-col md:flex-row items-center justify-between max-w-3xl md:max-w-2xl lg:max-w-xl"
                style={{
                  background:
                    'linear-gradient(to top, #0d9488 0%, #0d9488 65%, transparent 65%, transparent 65%)',
                }}
              >
                {/* Equipo multidisciplinario box - positioned in the white space near doctor's head */}
                <div className="absolute hidden lg:block lg:right-0 text-center md:right-0 top-2 md:top-6 bg-teal-800 rounded-3xl p-4 md:p-3 text-white max-w-full md:max-w-[325px] shadow-lg z-5">
                  <p
                    className="text-md md:text-sm font-bold"
                    style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                  >
                    <span className="text-md md:text-sm font-extrabold">
                      Equipo multidisciplinario:
                    </span>{' '}
                    Profesionales capacitados en atención domiciliaria.
                  </p>
                </div>
                <Image
                  src="/images/doctor-consultation.png"
                  alt="Doctor profesional de AVI Salud"
                  width={380}
                  height={380}
                  className="rounded-xl md:-ml-4 mb-0.5 md:-mb-0.5 mt-2 md:mt-0"
                />
                {/* El h3 está alineado a la derecha del contenedor en desktop, oculto en móvil */}
                <h3
                  className="hidden md:block text-2xl text-teal-50 font-bold text-left mt-28 pr-8"
                  style={{
                    fontFamily: 'Cocogoose ProTrial, sans-serif',
                    lineHeight: 1.25,
                  }}
                >
                  Acompañar de manera vital e Integral a la Salud de cada
                  paciente.
                </h3>
              </div>

              {/* Texto fuera del contenedor verde, debajo */}
              <h3
                className="text-lg md:text-2xl text-teal-50 font-bold text-center md:hidden mt-4 pr-0"
                style={{
                  fontFamily: 'Cocogoose ProTrial, sans-serif',
                  lineHeight: 1.25,
                }}
              >
                Acompañar de manera vital e Integral a la Salud de cada
                paciente.
              </h3>
            </div>
          </div>
        </div>
        {/* Bottom Text */}
        <div className="text-center relative z-20 mt-8 mb-8">
          <h2
            className="text-xl font-light text-teal-50 tracking-tight"
            style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
          >
            Estamos para acompañarte
          </h2>
        </div>
      </section>

      {/* Sección de (Planes) */}
      <section
        id="servicios"
        className="py-8 sm:py-12 md:py-16 relative overflow-hidden flex items-center z-5"
      >
        {/* Imagen de fondo de la sección Planes */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/images/specialist-with-grandma-optimized.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-[#18A39C]/55" />

        <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-5 py-4 sm:py-6">
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center">
              <svg
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-8 sm:h-12 md:h-16 lg:h-20 text-teal-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 32 48"
                style={{ marginRight: '-20px', marginLeft: '-4px' }}
              >
                <polyline
                  points="20,16 28,24 20,32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-8 sm:h-12 md:h-16 lg:h-20 text-teal-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 32 48"
                style={{ marginLeft: '-12px', marginRight: '-6px' }}
              >
                <polyline
                  points="20,16 28,24 20,32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h2 className="font-cucumin leading-[1.1] text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center sm:text-left ml-0 sm:ml-4 md:ml-6 text-teal-50 tracking-tighter drop-shadow-xs px-4 sm:px-0 mb-6 sm:mb-8">
            Encontrá el mejor plan para <br className="hidden sm:block" />
            cuidar a quien{' '}
            <span className="font-cucumin text-teal-800 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">
              más querés
            </span>
          </h2>

          <PlansGrid
            useWhatsApp
            whatsAppPhone={process.env.NEXT_PUBLIC_WHATSAPP_PHONE}
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 relative overflow-hidden min-h-[65vh] sm:min-h-[70vh] md:min-h-screen flex items-center">
        {/* Imagen de fondo responsiva: centrada en mobile, igual en desktop */}
        <div className="absolute inset-0">
          <Image
            src="/images/coordina-tus-servicios.png"
            alt="Coordina tus servicios"
            fill
            className="object-cover object-center md:object-center"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-5 w-full">
          <div className="flex flex-col items-center text-center md:block md:text-left">
            {/* Añade aquí contenido si es necesario; centrado en mobile */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 relative z-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/healthcare-professional.webp')",
            backgroundSize: 'cover',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-5">
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            <div className="w-full lg:flex-1 lg:max-w-md xl:max-w-lg mx-auto lg:mx-0">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="font-cocogoose text-2xl sm:text-3xl tracking-tighter leading-tighter font-normal text-teal-500">
                  Realiza tu consulta
                </h2>
              </div>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-auto">
              <Card className="bg-teal-500 text-teal-50 shadow-lg rounded-2xl sm:rounded-3xl">
                <CardContent className="p-6 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-700 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.844 5.18 2.441 7.34L4 29l6.879-2.262A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.92-.52-5.6-1.5l-.4-.23-4.08 1.34 1.34-4.08-.23-.4A10.97 10.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.09-7.41c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-base sm:text-lg md:text-xl">
                        +54 9 223 530 6250
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-700 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-base sm:text-lg md:text-xl">
                        info@avisalud.com.ar
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-700 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-base sm:text-lg md:text-xl">
                        Av. Colón 3095
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
