import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-700 text-white py-8 sm:py-24 font-cocogoose">
      <Image
        src="/images/light-geometric-bg.png"
        alt="Fondo de fondo geometrico"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 pointer-events-none select-none"
        priority={false}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-left">
            <div className="flex items-center justify-start space-x-2 mb-3">
              <Image
                src="/images/avi-salud-logo.png"
                alt="AVI Salud"
                width={80}
                height={26}
                className="h-7 sm:h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-teal-100 text-sm sm:text-base">
              Cuidamos a los que más te cuidaron con profesionalismo y calidez
              humana.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-3 text-sm sm:text-base">Servicios</h4>
            <ul className="space-y-1 text-teal-100 text-sm sm:text-base">
              <li>
                <a href="/planes" className="hover:text-white transition-colors">
                  Plan Acompañar
                </a>
              </li>
              <li>
                <a href="/planes" className="hover:text-white transition-colors">
                  Plan Vital
                </a>
              </li>
              <li>
                <a href="/planes" className="hover:text-white transition-colors">
                  Plan Integral
                </a>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-3 text-sm sm:text-base">Institucional</h4>
            <ul className="space-y-1 text-teal-100 text-sm sm:text-base">
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
              {/* Corporativo es privado: no indexar en footer */}
              <li>
                <a href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="font-bold mb-3 text-sm sm:text-base">Contacto</h4>
            <div className="space-y-1 text-teal-100 text-sm sm:text-base">
              <p>+54 9 223 530 6250</p>
              <p>info@avisalud.com.ar</p>
              <p>Av. Colón 3095</p>
            </div>
          </div>
        </div>
        <div className="border-t border-teal-600 mt-6 pt-6 text-left text-teal-100 text-sm sm:text-base">
          <p>&copy; 2024 AVI Salud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
