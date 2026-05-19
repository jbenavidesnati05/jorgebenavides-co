'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Code2, BarChart3, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Layers,
    title: 'Producto & Agilidad',
    phrase: 'Gestión de requerimientos, priorización y entrega de valor en entornos ágiles.',
    badge: 'Producto',
    badgeStyle: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    chipStyle: 'bg-blue-500/8 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/15 hover:border-blue-500/30',
    chips: [
      'Product Backlog',
      'Historias de usuario',
      'Criterios de aceptación',
      'Priorización',
      'Scrum',
      'Kanban',
      'Stakeholders',
      'Sprint Planning',
      'Refinamiento',
    ],
  },
  {
    icon: Code2,
    title: 'Tecnología & Delivery',
    phrase: 'Criterio técnico para conversar con equipos de desarrollo, QA y negocio.',
    badge: 'Delivery',
    badgeStyle: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
    chipStyle: 'bg-indigo-500/8 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/15 hover:border-indigo-500/30',
    chips: [
      '.NET / C#',
      'SQL Server',
      'MongoDB',
      'REST APIs',
      'Git',
      'Azure DevOps',
      'QA End-to-End',
      'Documentación técnica',
    ],
  },
  {
    icon: BarChart3,
    title: 'Datos & Decisión',
    phrase: 'Análisis de información para entender problemas, validar hipótesis y apoyar decisiones.',
    badge: 'Decisión',
    badgeStyle: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    chipStyle: 'bg-cyan-500/8 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/15 hover:border-cyan-500/30',
    chips: [
      'Power BI',
      'SQL',
      'Excel avanzado',
      'Power Query',
      'Análisis de datos',
      'Indicadores',
      'Reportes',
    ],
  },
  {
    icon: Sparkles,
    title: 'IA & Automatización',
    phrase: 'Exploración y creación de soluciones con IA para automatizar tareas, mejorar productividad y acelerar procesos.',
    badge: 'Automatización',
    badgeStyle: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    chipStyle: 'bg-violet-500/8 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/15 hover:border-violet-500/30',
    chips: [
      'Agentes GPT',
      'Agentes Claude',
      'Automatizaciones simples',
      'Prompt Engineering',
      'IA aplicada',
      'Asistentes digitales',
      'Flujos de productividad',
      'Transformación digital',
    ],
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

export default function Skills() {
  return (
    <section id="tecnologia" className="py-28 px-6 bg-slate-100/80 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            03. Capacidades
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
            Producto, tecnología e IA aplicada
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-14">
            No solo conozco herramientas — puedo conectar producto, negocio y tecnología para crear soluciones digitales.
          </p>
        </FadeUp>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <FadeUp key={cat.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                className={`glass rounded-2xl p-6 border ${cat.border} transition-all duration-200 shadow-sm h-full`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <cat.icon size={20} className={cat.iconColor} />
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${cat.badgeStyle}`}>
                    {cat.badge}
                  </span>
                </div>

                {/* Phrase */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  {cat.phrase}
                </p>

                {/* Divider */}
                <div className="h-px bg-slate-200 dark:bg-white/5 mb-4" />

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors duration-150 cursor-default ${cat.chipStyle}`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
