export type Plan = {
  id: string
  titulo: string
  descripcion: string[] | string
  icono: string
  alt: string
}

export const planesData: Plan[] = [
  {
    id: 'acompanar',
    titulo: 'Plan Acompañar',
    descripcion: [
      'Supervisión y asistencia leve',
      'Ideal para adultos mayores',
      'Contención y apoyo emocional',
      'Seguimiento de recuperación',
    ],
    icono: '/images/medical-cross-icon.png',
    alt: 'Plan Acompañar',
  },
  {
    id: 'integral',
    titulo: 'Plan Integral',
    descripcion: [
      'Internación domiciliaria de alta intensidad',
      'Red de cuidados continua 24/7',
      'Equipo médico especializado',
      'Monitoreo avanzado de signos vitales',
      'Respuesta inmediata ante emergencias',
      'Gestión integral de medicamentos',
      'Cuidados paliativos especializados',
      'Plan de tratamiento personalizado',
    ],
    icono: '/images/stethoscope-icon.png',
    alt: 'Plan Integral',
  },
  {
    id: 'vital',
    titulo: 'Plan Vital',
    descripcion: [
      'Atención médica frecuente',
      'Patologías agudas y crónicas',
      'Abordaje clínico intensivo',
      'Monitoreo especializado',
      'Tratamientos domiciliarios',
      'Coordinación con estudios',
    ],
    icono: '/images/heartbeat-icon.png',
    alt: 'Plan Vital',
  },
]


