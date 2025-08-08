import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1
              className="font-cocogoose text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 tracking-tighter mb-4 sm:mb-6"
            >
              Contáctanos
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de especialistas
              y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="bg-white shadow-lg hover:shadow-[0_4px_24px_0_rgba(13,148,136,0.18)] transition-shadow duration-300 rounded-2xl sm:rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h2
                    className="font-cocogoose text-2xl sm:text-3xl font-bold text-teal-800 mb-6"
                  >
                    Envíanos tu consulta
                  </h2>
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-teal-800 font-medium mb-2 text-sm sm:text-base"
                          htmlFor="nombre"
                        >
                          Nombre
                        </label>
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label
                          className="block text-teal-800 font-medium mb-2 text-sm sm:text-base"
                          htmlFor="apellido"
                        >
                          Apellido
                        </label>
                        <Input
                          id="apellido"
                          placeholder="Tu apellido"
                          className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-teal-800 font-medium mb-2 text-sm sm:text-base"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-teal-800 font-medium mb-2 text-sm sm:text-base"
                        htmlFor="telefono"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+54 9 223 530 6250"
                        className="bg-gray-50 border-0 rounded-lg shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-teal-800 font-medium mb-2 text-sm sm:text-base"
                        htmlFor="consulta"
                      >
                        Consulta
                      </label>
                      <Textarea
                        id="consulta"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        className="bg-gray-50 border-0 rounded-lg min-h-[120px] sm:min-h-[150px] resize-none shadow focus:shadow-md transition-shadow w-full text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="pt-4">
                      <button className="learn-more w-full sm:w-auto">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow">
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                        </span>
                        <span className="button-text text-sm sm:text-base">Enviar consulta</span>
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 sm:space-y-8">
                {/* Main Contact Card */}
                <Card className="bg-teal-500 text-teal-50 shadow-lg rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-6 sm:p-8">
                    <h3
                      className="font-cocogoose text-xl sm:text-2xl font-bold mb-6"
                    >
                      Información de contacto
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-medium">Teléfono</p>
                          <p className="text-sm sm:text-base md:text-lg">+54 9 223 530 6250</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-medium">Email</p>
                          <p className="text-sm sm:text-base md:text-lg">info@avisalud.com.ar</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-medium">Dirección</p>
                          <p className="text-sm sm:text-base md:text-lg">Av. Colón 3095</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info Card */}
                <Card className="bg-teal-700 text-white rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start">
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-teal-300 mt-1 mr-4" />
                      <div>
                        <h4
                          className="font-cocogoose text-lg sm:text-xl font-bold mb-2"
                        >
                          Atención personalizada
                        </h4>
                        <p className="text-sm sm:text-base text-teal-100">
                          Nuestro equipo de especialistas está disponible para brindarte
                          la mejor atención y resolver todas tus dudas sobre nuestros servicios.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="bg-green-500 text-white rounded-2xl sm:rounded-3xl">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </div>
                      <h4
                        className="font-cocogoose text-lg sm:text-xl font-bold mb-2"
                      >
                        ¿Necesitas una respuesta rápida?
                      </h4>
                      <p className="text-sm sm:text-base text-green-100 mb-4">
                        Escríbenos por WhatsApp y te responderemos al instante
                      </p>
                      <Button className="bg-white text-green-500 hover:bg-green-50 rounded-full px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105">
                        Chatear por WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
