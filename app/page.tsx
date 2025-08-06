import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ChevronRight, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Datos de los planes de servicios
const planesData = [
  {
    id: 'acompanar',
    titulo: 'Plan Acompañar',
    descripcion: [
      '✓ Supervisión y asistencia leve',
      '✓ Ideal para adultos mayores',
      '✓ Contención y apoyo emocional',
      '✓ Seguimiento de recuperación',
    ],
    icono: '/images/medical-cross-icon.png',
    alt: 'Plan Acompañar',
  },
  {
    id: 'integral',
    titulo: 'Plan Integral',
    descripcion: [
      '✓ Internación domiciliaria de alta intensidad',
      '✓ Red de cuidados continua 24/7',
      '✓ Equipo médico especializado',
      '✓ Monitoreo avanzado de signos vitales',
      '✓ Respuesta inmediata ante emergencias',
      '✓ Gestión integral de medicamentos',
      '✓ Cuidados paliativos especializados',
      '✓ Plan de tratamiento personalizado',
    ],
    icono: '/images/stethoscope-icon.png',
    alt: 'Plan Integral',
  },
  {
    id: 'vital',
    titulo: 'Plan Vital',
    descripcion: [
      '✓ Atención médica frecuente',
      '✓ Patologías agudas y crónicas',
      '✓ Abordaje clínico intensivo',
      '✓ Monitoreo especializado',
      '✓ Tratamientos domiciliarios',
      '✓ Coordinación con estudios',
    ],
    icono: '/images/heartbeat-icon.png',
    alt: 'Plan Vital',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0FDFA]">
      {/* Hero Section */}
      {/* Hero Image with Text Overlay and Curved Bottom */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/nurse-patient-care.png"
          alt="Enfermera cuidando paciente"
          fill
          className="object-cover w-full h-full scale-105 blur-xs shadow-lg -ml-4"
        />
        <div className="absolute inset-0 bg-teal-300 bg-opacity-10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center text-left px-4 sm:px-6 lg:px-10">
          <div className="container mx-auto">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-teal-50 -tracking-wider drop-shadow-md"
                style={{
                  fontFamily: 'Cocogoose ProTrial, sans-serif',
                  lineHeight: 0.9,
                }}
              >
                Cuidamos a<br />
                los que{' '}
                <span className="font-semibold -tracking-wider text-teal-800 drop-shadow-md">
                  más
                </span>
                <br />
                <span className="font-semibold -tracking-wider text-teal-800 drop-shadow-md">
                  {' '}
                  te cuidaron
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 sm:h-32 md:h-44 lg:h-56"
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

        {/* Button positioned in the white curved area */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 lg:bottom-16 left-1/4 transform -translate-x-1/2 z-5">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-bold text-sm sm:text-base md:text-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            Conoce más
            <ChevronRight className="ml-1 sm:ml-2 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 text-white font-bold" />
          </Button>
        </div>

        {/* Iconos de redes sociales - Responsive */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
          <div className="bg-teal-600 text-white space-y-1 rounded-l-2xl shadow-lg">
            <a
              href="#"
              className="block py-3 sm:py-4 md:py-5 px-2 sm:px-3 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="block py-3 sm:py-4 md:py-5 px-2 sm:px-3 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="block py-3 sm:py-4 md:py-5 px-2 sm:px-3 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a
              href="#"
              className="block py-3 sm:py-4 md:py-5 px-2 sm:px-3 items-center justify-center hover:bg-teal-700 transition-colors rounded-l-xl"
            >
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* About Section - Responsive */}
      <section
        id="nosotros"
        className="relative h-auto py-12 bg-[#F0FDFA] overflow-hidden"
      >
        {/* Background with geometric pattern */}
        <div className="absolute inset-0">
          <Image
            src="/images/teal-gradient-bg.png"
            alt="Fondo geométrico"
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="mx-auto relative top-[20%] px-10 md:px-6 py-20 z-3 flex justify-center items-center ">
          <div className="grid lg:grid-cols-2 ">
            {/* Left Panel - Sobre Nosotros */}
            <div className="bg-teal-800 rounded-3xl max-w-lg md:max-w-md px-6 text-white relative shadow-2xl py-16 mt-auto">
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
              <h2
                className="text-left mb-4"
                style={{
                  fontFamily: 'Cocogoose ProTrial, sans-serif',
                  lineHeight: 0.9,
                }}
              >
                <span
                  className="text-teal-500 text-5xl text-shadow-lg font-bold"
                  style={{
                    fontFamily: 'Cocogoose ProTrial, sans-serif',
                    lineHeight: 0.9,
                  }}
                >
                  Sobre
                </span>
                <br />
                <span
                  className="text-teal-50 text-5xl text-shadow-lg font-bold"
                  style={{
                    fontFamily: 'Cocogoose ProTrial, sans-serif',
                    lineHeight: 0.9,
                  }}
                >
                  Nosotros
                </span>
              </h2>

              <p
                className="text-xl mb-8 text-white text-left"
                style={{ fontFamily: 'Acumin Variable Concept, sans-serif' }}
              >
                Somos una empresa de internación domiciliaria cuyo propósito
                esencial se encuentra reflejado en su propio nombre:
              </p>

              <div className="text-left">
                <Button className="bg-teal-50 hover:bg-teal-700 hover:text-white text-teal-600 font-bold rounded-full px-6 py-2 text-base">
                  Contáctanos
                </Button>
              </div>
            </div>

            {/* Center Panel - Doctor Image */}
            <div className="bg-transparent rounded-3xl p-4 relative">
              <div
                className="relative rounded-3xl flex flex-row items-center justify-between max-w-3xl md:max-w-xl"
                style={{
                  background:
                    'linear-gradient(to top, #0d9488 0%, #0d9488 65%, transparent 65%, transparent 65%)',
                }}
              >
                {/* Equipo multidisciplinario box - positioned in the white space near doctor's head */}
                <div className="absolute lg:right-0 text-center md:right-0 top-6 bg-teal-800 rounded-3xl p-3 text-white max-w-sm md:max-w-[325px] shadow-lg z-5">
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                  >
                    <span className="text-sm font-extrabold">
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
                  className="rounded-xl -ml-4 -mb-0.5"
                />
                {/* El h3 está alineado a la derecha del contenedor */}
                <h3
                  className="text-2xl text-teal-50 font-bold text-left mt-28 pr-8 "
                  style={{
                    fontFamily: 'Cocogoose ProTrial, sans-serif',
                    lineHeight: 1.25,
                  }}
                >
                  Acompañar de manera vital
                  e Integral a la Salud
                  de cada paciente.
                </h3>
              </div>
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

      {/* Sección de Servicios */}
      <section
        id="servicios"
        className="py-8 sm:py-12 md:py-16 relative overflow-hidden flex items-center z-5"
      >
        {/* Imagen de fondo difuminada */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/light-geometric-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-5 py-4 sm:py-6">
          <div className="flex items-center ">
            <div className="flex items-center">
              <svg
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-8 sm:h-12 md:h-16 lg:h-20 text-teal-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 32 48"
                style={{ marginRight: '-12px', marginLeft: '-6px' }}
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
                style={{ marginLeft: '-8px', marginRight: '-6px' }}
              >
                <polyline
                  points="20,16 28,24 20,32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold ml-2 sm:ml-4 md:ml-6 text-teal-800 tracking-tighter drop-shadow-md px-4 sm:px-0 mb-6 sm:mb-8"
            style={{
              fontFamily: 'Cocogoose ProTrial, sans-serif',
              lineHeight: 1.1,
            }}
          >
            Encontrá el mejor plan para <br className="hidden sm:block" />
            cuidar a quien{' '}
            <span
              className="text-teal-50 drop-shadow-md"
              style={{
                WebkitTextStroke: '0.8px #134e4a', // color teal-800
              }}
            >
              más querés
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-stretch mt-8 sm:mt-12 md:mt-16 px-4 sm:px-0">
            {planesData.map((plan) => (
              <Card
                key={plan.id}
                className={`${
                  plan.id === 'integral'
                    ? 'bg-teal-700 border-2 border-teal-50 h-auto min-h-[500px] sm:min-h-[500px] md:min-h-[500px] scale-100 sm:scale-100'
                    : plan.id === 'vital'
                    ? 'bg-teal-50 border-2 border-teal-700 h-auto min-h-[500px] sm:min-h-[500px] md:min-h-[500px] scale-100 sm:scale-100'
                    : 'bg-white border-2 border-teal-50 h-auto min-h-[500px] sm:min-h-[500px] md:min-h-[500px] scale-100 sm:scale-100'
                } rounded-2xl sm:rounded-3xl flex flex-col transition-transform duration-500 shadow-md hover:shadow-xl ease-out transform hover:-translate-y-2 sm:hover:-translate-y-4 md:hover:-translate-y-6`}
                style={{
                  transition: 'transform 0.75s, box-shadow 0.75s ease-in-out',
                }}
              >
                <CardContent className=" sm:p-2 flex flex-col h-full justify-between">
                  <div className="flex-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mr-2">
                      <Image
                        src={plan.icono}
                        alt={plan.alt}
                        width={80}
                        height={80}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
                      />
                    </div>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-semibold sm:p-4 md:p-5 mb-2 sm:mb-2 md:mb-2 -tracking-wider leading-tighter ${
                        plan.id === 'integral'
                          ? 'text-white'
                          : plan.id === 'vital'
                          ? 'text-teal-600'
                          : 'text-teal-600'
                      }`}
                      style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                    >
                      {plan.titulo}
                    </h3>
                    <div
                      className={`font-medium text-sm sm:text-base tracking-tighter sm:px-4 md:px-6 space-y-2 ${
                        plan.id === 'integral'
                          ? 'text-gray-100'
                          : plan.id === 'vital'
                          ? 'text-gray-600'
                          : 'text-gray-600'
                      }`}
                      style={{
                        fontFamily: 'Acumin Variable Concept, sans-serif',
                        lineHeight: 1.3,
                      }}
                    >
                      {Array.isArray(plan.descripcion) ? (
                        plan.descripcion.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <span className="mr-2">{item}</span>
                          </div>
                        ))
                      ) : (
                        <p>{plan.descripcion}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center w-full mt-4 sm:mt-6">
                    <Link href="/planes" className="w-full sm:w-auto">
                      <Button
                        className={`w-full sm:w-auto mb-2 sm:mb-4 rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 ${
                          plan.id === 'integral'
                            ? 'bg-teal-50 hover:bg-teal-100 text-teal-600 focus:ring-gray-300'
                            : plan.id === 'vital'
                            ? 'bg-teal-600 hover:bg-teal-700 text-teal-50 focus:ring-teal-300'
                            : 'bg-teal-600 hover:bg-teal-700 text-teal-50 focus:ring-teal-300'
                        }`}
                        style={{
                          boxShadow: '0 8px 24px 0 rgba(19, 78, 74, 0.15)',
                          transition: 'transform 0.5s, box-shadow 0.5s',
                        }}
                      >
                        Más información
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 bg-teal-700 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
        {/* Imagen de fondo difuminada */}
        <div
          className="absolute inset-0 blur-xs opacity-30"
          style={{
            backgroundImage: "url('/images/nurse-serving-coffe-grandma.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 85%',
            transform: 'scale(1.1)',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
          <div className="max-w-sm sm:max-w-md md:max-w-xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/20">
              <div className="mb-4 sm:mb-5">
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-800 mb-2 leading-tighter tracking-tighter"
                  style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
                >
                  ¿Necesitas ayuda con el cuidado de tu familiar?
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-lighter text-teal-600 leading-tighter -tracking-wider">
                  Te contactamos sin compromiso
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl sm:rounded-3xl p-3 border border-teal-600 shadow-xl mb-4 sm:mb-5">
                <p className="text-teal-800 font-semibold text-sm sm:text-base md:text-lg tracking-tighter">
                  Dejanos tu teléfono y te llamamos
                </p>
              </div>

              <form className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="tel"
                    placeholder="Tu teléfono"
                    className="flex-1 bg-gray-100 border-2 border-teal-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center text-sm sm:text-base md:text-lg shadow-md transition-all duration-300 placeholder-teal-400"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap border-2 border-teal-700"
                  >
                    <span className="inline-flex items-center gap-1 sm:gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      Enviar
                    </span>
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-teal-800 opacity-90 bg-teal-50 rounded-lg sm:rounded-xl p-2 w-full shadow-sm border border-teal-100 mx-auto">
                  Un especialista te contactará en las próximas 24 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 relative z-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/healthcare-professional.png')",
            backgroundSize: 'cover',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-5">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl tracking-tighter leading-tighter font-normal text-teal-500 mb-4"
              style={{ fontFamily: 'Cocogoose ProTrial, sans-serif' }}
            >
              Realiza tu consulta
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            <Card className="bg-white shadow-lg hover:shadow-[0_4px_24px_0_rgba(13,148,136,0.18)] transition-shadow duration-300 flex-1 max-w-md mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl">
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      className="block text-teal-800 font-medium mb-1 text-sm sm:text-base"
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>
                    <Input
                      id="nombre"
                      placeholder=""
                      className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-teal-800 font-medium mb-1 text-sm sm:text-base"
                      htmlFor="apellido"
                    >
                      Apellido
                    </label>
                    <Input
                      id="apellido"
                      placeholder=""
                      className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-teal-800 font-medium mb-1 text-sm sm:text-base"
                      htmlFor="mail"
                    >
                      Mail
                    </label>
                    <Input
                      id="mail"
                      type="email"
                      placeholder=""
                      className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-teal-800 font-medium mb-1 text-sm sm:text-base"
                      htmlFor="consulta"
                    >
                      Consulta
                    </label>
                    <Textarea
                      id="consulta"
                      placeholder=""
                      className="bg-gray-50 border-0 rounded-lg min-h-[80px] sm:min-h-[100px] resize-none shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                    />
                  </div>
                  <div className="pt-2 flex items-center">
                    <button className="learn-more w-32 sm:w-40 h-auto">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow">
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                      </span>
                      <span className="button-text text-sm sm:text-base">
                        enviar
                      </span>
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 flex-1 max-w-md mx-auto lg:mx-0 mt-8 lg:mt-auto">
              <div className="flex flex-row gap-2 items-center">
                <Card className="bg-teal-700 text-white rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center">
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-6 text-teal-500" />
                    </div>
                  </CardContent>
                </Card>
                <span className="text-teal-700 font-medium text-lg sm:text-xl md:text-2xl leading-none tracking-tighter">
                  Atención cálida sin compromiso.
                </span>
              </div>

              <Card className="bg-teal-500 text-teal-50 shadow-lg rounded-2xl sm:rounded-3xl">
                <CardContent className="p-4 sm:p-5">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-700 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.844 5.18 2.441 7.34L4 29l6.879-2.262A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.92-.52-5.6-1.5l-.4-.23-4.08 1.34 1.34-4.08-.23-.4A10.97 10.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.09-7.41c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base md:text-lg">
                        +54 9 223 530 6250
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-700 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <Mail className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base md:text-lg">
                        info@avisalud.com.ar
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-700 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <MapPin className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm sm:text-base md:text-lg">
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

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3">
                <Image
                  src="/images/avi-salud-logo.png"
                  alt="AVI Salud"
                  width={80}
                  height={26}
                  className="h-5 sm:h-6 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-teal-100 text-xs sm:text-sm">
                Cuidamos a los que más te cuidaron con profesionalismo y calidez
                humana.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 text-xs sm:text-sm">Servicios</h4>
              <ul className="space-y-1 text-teal-100 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plan Acompañar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plan Vital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plan Integral
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 text-xs sm:text-sm">Empresa</h4>
              <ul className="space-y-1 text-teal-100 text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Equipo médico
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 text-xs sm:text-sm">Contacto</h4>
              <div className="space-y-1 text-teal-100 text-xs sm:text-sm">
                <p>+54 9 223 530 6250</p>
                <p>info@avisalud.com.ar</p>
                <p>Av. Colón 3095</p>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-600 mt-6 pt-6 text-center text-teal-100 text-xs sm:text-sm">
            <p>&copy; 2024 AVI Salud. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <a
          href="https://wa.me/5492235306250?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20AVI%20Salud"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-green-500 flex items-center justify-center"
        >
          {/* Background pill shapes */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500 rounded-t-full"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-green-500 rounded-b-full"></div>
          </div>

          {/* WhatsApp icon */}
          <svg
            className="relative w-6 h-6 sm:w-7 sm:h-7 text-white z-10 group-hover:scale-110 transition-transform duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </a>
      </div>
    </div>
  )
}
