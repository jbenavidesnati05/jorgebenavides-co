'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronDown, Linkedin } from 'lucide-react'
import Image from 'next/image'

const CV_PATH = '/cv/CV_Jorge_Benavides_Product_Owner_2026.pdf'

export default function Hero() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.warn('[TODO] Reemplaza el PDF en /public/cv/CV_Jorge_Benavides_Product_Owner_2026.pdf')
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-sm text-blue-400 tracking-[0.2em] uppercase mb-5"
          >
            Jorge Benavides Nati
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 text-white">
            Product Owner en formación,{' '}
            <span className="text-gradient">con base técnica real.</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg mb-4 max-w-md leading-relaxed">
            Vengo del desarrollo de software en fintech. Hoy quiero liderar producto: priorizar
            backlog, refinar historias y entregar valor con criterio técnico y visión de negocio.
          </p>

          <p className="text-slate-500 text-sm mb-10 font-mono">
            +3 años en fintech · Scrum · Azure DevOps · Medellín, Colombia.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={CV_PATH}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Descargar CV de Jorge Benavides Nati"
              className="px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <Download size={16} aria-hidden="true" />
              Descargar CV
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jorge-benavides-productowner"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Ver perfil de LinkedIn de Jorge Benavides (abre en nueva pestaña)"
              className="px-7 py-3.5 glass rounded-2xl text-white font-semibold transition-all duration-200 hover:bg-white/10 flex items-center gap-2"
            >
              <Linkedin size={16} aria-hidden="true" />
              Contactar por LinkedIn
            </motion.a>
          </div>

          {/* Social quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-10"
          >
            <a
              href="https://www.linkedin.com/in/jorge-benavides-productowner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-blue-400 transition-colors font-mono"
            >
              LinkedIn ↗
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <a
              href="mailto:jbenavidesnati05@gmail.com"
              className="text-xs text-slate-500 hover:text-blue-400 transition-colors font-mono"
            >
              Email ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-full border border-blue-500/15 animate-pulse" aria-hidden="true" />
            <div className="absolute -inset-12 rounded-full border border-blue-500/8" aria-hidden="true" />

            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glow-ring border-4 border-blue-500/40 animate-glow-pulse">
              <Image
                src="/jorge.png"
                alt="Jorge Benavides Nati — Product Owner en formación con base técnica en fintech"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 shadow-xl"
              aria-label="Disponible para nuevas oportunidades"
            >
              <p className="text-xs text-slate-400 font-mono">Disponible para</p>
              <p className="text-sm font-bold text-blue-400">nuevas oportunidades</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#perfil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Ir a la sección Perfil"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
