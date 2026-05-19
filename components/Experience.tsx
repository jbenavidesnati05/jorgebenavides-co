'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LayoutGrid, Cpu, TrendingUp, Calendar, Zap } from 'lucide-react'

const focusCards = [
  {
    icon: Cpu,
    title: 'Criterio técnico',
    tags: 'Software · Datos · Integraciones',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    icon: TrendingUp,
    title: 'Visión de negocio',
    tags: 'Clientes · Viabilidad · Soluciones',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    icon: LayoutGrid,
    title: 'Producto digital',
    tags: 'Backlog · Scrum · Stakeholders',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
  },
]

const experiences = [
  {
    company: 'Sistecredito SAS',
    role: 'Development Software Engineer · Fintech',
    period: 'Jun 2022 – Feb 2026',
    duration: '3 años 8 meses',
    tagline: 'Rol con alta cercanía a producto, negocio y operación.',
    bullets: [
      'Participación en refinamiento, priorización y gestión del Product Backlog junto a Product Owners y Product Managers.',
      'Traducción de necesidades del negocio en requerimientos claros para desarrollo, QA y stakeholders.',
      'Validación funcional, análisis de incidentes y acompañamiento end-to-end de soluciones digitales.',
    ],
    impact: '+25 casos problema resueltos en aplicativos internos con impacto en datos, operación y continuidad del negocio.',
    dotColor: 'bg-blue-500',
  },
  {
    company: 'Mega Aires SAS / Larco SAS',
    role: 'Ingeniero de Diseño y Ventas · Proyectos de ingeniería',
    period: 'Nov 2015 – May 2022',
    duration: 'aprox. 7 años',
    tagline: 'Base profesional en levantamiento de necesidades, análisis técnico-económico y relación directa con clientes.',
    bullets: [
      'Gestión de proyectos desde el requerimiento del cliente hasta la solución técnico-económica.',
      'Presentación y negociación de propuestas, sustentando viabilidad técnica y valor para el cliente.',
      'Coordinación con equipos multidisciplinarios para asegurar soluciones viables y ejecutables.',
    ],
    impact: 'Diseño de modelo paramétrico de costeo que automatizó cálculos y redujo tiempos de cotización.',
    dotColor: 'bg-indigo-500',
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

export default function Experience() {
  return (
    <section id="trayectoria" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            02. Trayectoria
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
            Trayectoria profesional
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-14">
            Una evolución entre producto digital, tecnología y soluciones de negocio.
          </p>
        </FadeUp>

        {/* Focus cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {focusCards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className={`glass rounded-2xl p-5 border ${card.border} transition-all duration-200 shadow-sm`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}>
                  <card.icon size={20} className={card.color} />
                </div>
                <p className="font-bold text-sm text-slate-900 dark:text-white mb-1">{card.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{card.tags}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent md:left-8" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full ${exp.dotColor} border-4 border-slate-50 dark:border-navy-950 z-10 shadow-sm`}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 shadow-sm">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 flex-shrink-0 mt-1 sm:mt-0">
                      <Calendar size={11} />
                      {exp.period}
                      <span className="text-slate-600">·</span>
                      {exp.duration}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-4 leading-relaxed">
                    {exp.tagline}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Impact block */}
                  <div className="flex items-start gap-2.5 bg-blue-500/5 dark:bg-blue-500/8 border border-blue-500/15 rounded-xl px-4 py-3">
                    <Zap size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-400 dark:text-blue-300 leading-relaxed">
                      <span className="font-bold">Impacto:</span> {exp.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
