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
    descripcion: 'Un plan de salud preventivo, enfocado en brindar servicios esenciales para pacientes con necesidades básicas de atención domiciliaria, o bien, un servicio de asistencia constante.',
    icono: '/images/medical-cross-icon.png',
    alt: 'Plan Acompañar',
  },
  {
    id: 'vital',
    titulo: 'Plan Vital',
    descripcion: 'Plan de rehabilitación diseñado para pacientes con necesidades moderadas o manejo de enfermedades crónicas estables que necesitan atención intermedia prolongada.',
    icono: '/images/heartbeat-icon.png',
    alt: 'Plan Vital',
  },
  {
    id: 'integral',
    titulo: 'Plan Integral',
    descripcion: 'Plan que se ajusta a cada paciente de alta complejidad con necesidades avanzadas, como cuidados paliativos, manejo integral de enfermedades complejas o internación domiciliaria completa.',
    icono: '/images/stethoscope-icon.png',
    alt: 'Plan Integral',
  },
]


