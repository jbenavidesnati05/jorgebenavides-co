'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, GitBranch, ArrowUpRight, PieChart, Link2, Calculator, Store } from 'lucide-react'

const cases = [
  {
    title: 'Modelo APU Paramétrico',
    subtitle: 'Mega Aires SAS',
    badge: 'Caso profesional',
    description:
      'Modelo de costeo en Excel con estructura APU que desglosaba cada componente hasta nivel de insumo. Actualizar un precio base recalculaba automáticamente costos de ensambles y soportes, eliminando el trabajo manual de cotización.',
    impact: 'Reducción significativa del tiempo de cotización por proyecto',
    impactType: 'Eficiencia operativa',
    stack: ['Excel Avanzado', 'Power Query', 'Fórmulas dinámicas'],
    icon: TrendingUp,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    border: 'border-blue-500/15 hover:border-blue-500/30',
  },
  {
    title: 'Resolución de Casos Críticos',
    subtitle: 'Sistecredito SAS — Fintech',
    badge: 'Caso profesional',
    description:
      '+25 incidentes críticos en productos digitales internos resueltos. Casos que impactaban datos, generaban pérdidas económicas y errores operativos. Ciclo completo: análisis, solución, pruebas QA y documentación técnica.',
    impact: 'Continuidad y confiabilidad de los productos digitales garantizada',
    impactType: 'Impacto de negocio',
    stack: ['.NET', 'SQL Server', 'MongoDB', 'Azure DevOps'],
    icon: GitBranch,
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
    border: 'border-indigo-500/15 hover:border-indigo-500/30',
  },
]

const personalProjects = [
  {
    title: 'Control de Gastos Personales',
    description:
      'Aplicación web para registrar, organizar y visualizar gastos personales de forma simple, ayudando a tener mayor claridad sobre el uso del dinero y tomar mejores decisiones financieras.',
    role: 'Idea, diseño funcional y desarrollo',
    type: 'App web personal',
    status: 'Disponible online',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: PieChart,
    url: 'https://jbenavidesnati05.github.io/control_de_gastos/',
  },
  {
    title: 'Hub de Links',
    description:
      'Página personal para organizar y centralizar accesos rápidos a herramientas, recursos y links de uso diario, evitando búsquedas repetitivas.',
    role: 'Idea, diseño funcional y desarrollo',
    type: 'App web personal',
    status: 'Disponible online',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: Link2,
    url: 'https://jbenavidesnati05.github.io/links/',
  },
  {
    title: 'Tabla de Amortización',
    description:
      'Calculadora de tabla de amortización adaptada a créditos en Colombia, con cuotas, intereses y saldo pendiente detallados por período.',
    role: 'Idea, diseño funcional y desarrollo',
    type: 'App web personal',
    status: 'Disponible online',
    stack: ['React', 'Vercel'],
    icon: Calculator,
    url: 'https://tabla-de-amortizacion-creditos.vercel.app/',
  },
  {
    title: 'Landing Cofiadulces',
    description:
      'Landing page para emprendimiento de obleas y dulces artesanales. Diseño visual, secciones de productos y contacto directo.',
    role: 'Idea, diseño funcional y desarrollo',
    type: 'Landing page',
    status: 'Disponible online',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: Store,
    url: 'https://jbenavidesnati05.github.io/Delicias-Trailer-Cofiadulces-/#inicio',
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            04. Impacto
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
            Proyectos, casos y soluciones digitales
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-16">
            Experiencia profesional y soluciones propias creadas para resolver problemas reales con tecnología.
          </p>
        </FadeUp>

        {/* Block 1: Professional cases */}
        <FadeUp delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Casos de impacto profesional
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {cases.map((project, i) => (
            <FadeUp key={project.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`group glass rounded-2xl p-6 border ${project.border} transition-all duration-300 flex flex-col h-full shadow-sm`}
              >
                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={22} className={project.iconColor} />
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-full font-mono border border-slate-200 dark:border-white/10 flex-shrink-0">
                    {project.badge}
                  </span>
                </div>

                {/* Header */}
                <p className="text-xs text-slate-400 font-mono mb-1">{project.subtitle}</p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="bg-green-500/5 border border-green-500/15 rounded-xl p-3 mb-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-mono">
                    {project.impactType}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium leading-snug">
                    {project.impact}
                  </p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-lg font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Block 2: Personal projects */}
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Soluciones digitales propias
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Aplicaciones web creadas como proyectos personales para convertir ideas cotidianas en herramientas funcionales.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {personalProjects.map((project, i) => (
            <FadeUp key={project.title} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-sm"
              >
                {/* Top row: icon + status badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <project.icon size={22} className="text-emerald-400" />
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono flex-shrink-0">
                    {project.status}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-5">
                  <span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Rol:</span>{' '}
                    {project.role}
                  </span>
                  <span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Tipo:</span>{' '}
                    {project.type}
                  </span>
                </div>

                {/* Stack + CTA */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-lg font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold rounded-xl transition-colors duration-200 shadow-sm shadow-emerald-500/20 flex-shrink-0"
                  >
                    Ver aplicación
                    <ArrowUpRight size={13} />
                  </motion.a>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
