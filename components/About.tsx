'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Wrench, Target, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const cards = [
  {
    icon: Code2,
    value: '+3 años en fintech',
    desc: 'Construcción de soluciones digitales en entornos ágiles',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
  },
  {
    icon: Wrench,
    value: '7 años en proyectos de ingeniería',
    desc: 'Levantamiento de necesidades, viabilidad técnica y soluciones para clientes',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    icon: Target,
    value: 'Foco actual: Product Owner',
    desc: 'Producto, negocio, tecnología, IA y automatización',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30 hover:border-cyan-500/50',
    highlight: true,
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="perfil" className="py-28 px-6 bg-slate-100/80 dark:bg-navy-900/40">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            01. Perfil
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-16">
            Producto, negocio<br className="hidden sm:block" /> y tecnología
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: text */}
          <FadeUp delay={0.1}>
            <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
              <p className="text-base text-slate-800 dark:text-slate-200">
                Mi recorrido combina tecnología, producto y negocio: más de{' '}
                <span className="text-blue-500 font-semibold">3 años construyendo soluciones digitales en fintech</span>{' '}
                y 7 años en proyectos de ingeniería, conectando necesidades técnicas, clientes y soluciones viables.
              </p>
              <p>
                He trabajado cerca de Product Owners, Product Managers, stakeholders, QA y equipos de
                desarrollo, participando en refinamiento de historias de usuario, análisis de requerimientos,
                validación funcional y entrega de valor en entornos ágiles.
              </p>
              <p>
                Actualmente oriento mi carrera hacia el rol de{' '}
                <span className="text-blue-500 dark:text-blue-400 font-semibold">Product Owner</span>, con una
                base técnica que me permite entender cómo se construyen las soluciones y una visión de negocio
                enfocada en generar valor real.
              </p>
              <p>
                Me interesa crear productos digitales, automatizaciones y soluciones apoyadas en{' '}
                <span className="text-blue-500 dark:text-blue-400 font-semibold">inteligencia artificial</span>{' '}
                que simplifiquen procesos, mejoren decisiones y generen impacto medible.
              </p>

              <motion.a
                href="#trayectoria"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium text-sm mt-2 transition-colors"
              >
                Ver trayectoria completa
                <ArrowRight size={15} />
              </motion.a>
            </div>
          </FadeUp>

          {/* Right: profile badge + cards */}
          <div className="space-y-4">

            {/* Profile badge */}
            <FadeUp delay={0.15}>
              <div className="glass rounded-2xl p-4 flex items-center gap-4 border border-blue-500/20 shadow-sm">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/iconjobn.png"
                    alt="Logo jbenavides"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-navy-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Jorge Benavides Nati
                  </p>
                  <p className="text-xs text-blue-500 font-mono truncate">
                    Product Owner
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-500/10 text-green-500 dark:text-green-400 rounded-full border border-green-500/20 flex-shrink-0 font-medium">
                  Disponible
                </span>
              </div>
            </FadeUp>

            {/* Highlight cards */}
            {cards.map((card, i) => (
              <FadeUp key={card.value} delay={0.2 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`glass rounded-2xl p-5 flex items-start gap-4 border ${card.border} transition-all duration-200 shadow-sm ${
                    card.highlight
                      ? 'bg-cyan-500/5 dark:bg-cyan-500/5'
                      : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <card.icon size={20} className={card.iconColor} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm text-slate-900 dark:text-white mb-1 ${card.highlight ? 'text-cyan-600 dark:text-cyan-300' : ''}`}>
                      {card.value}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
