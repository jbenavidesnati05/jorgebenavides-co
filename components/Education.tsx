'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import Image from 'next/image'

const education = [
  {
    logo: '/cesde.jpg',
    title: 'Técnico en Desarrollo de Software',
    institution: 'CESDE',
    year: '2022',
  },
  {
    logo: '/itm.jpg',
    title: 'Especialista en Formulación y Evaluación de Proyectos',
    institution: 'Instituto Tecnológico Metropolitano — ITM',
    year: '2015',
  },
  {
    logo: '/udea.png',
    title: 'Ingeniero Mecánico',
    institution: 'Universidad de Antioquia — UdeA',
    year: '2014',
  },
]

export default function Education() {
  return (
    <section id="formacion" className="py-28 px-6 bg-slate-100/80 dark:bg-navy-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            05. Formación
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-16">
            Educación y Certificaciones
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Academic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="flex items-center gap-2.5 text-slate-800 dark:text-white font-bold text-lg mb-6">
              <GraduationCap className="text-blue-500" size={22} />
              Formación Académica
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={44}
                      height={44}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
                      {edu.title}
                    </p>
                    <p className="text-blue-500 dark:text-blue-400 text-xs mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-slate-400 font-mono flex-shrink-0">{edu.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="flex items-center gap-2.5 text-slate-800 dark:text-white font-bold text-lg mb-6">
              <Award className="text-blue-500" size={22} />
              Certificaciones y Cursos
            </h3>
            <div className="space-y-1.5">
              {[
                { title: 'IA y Transformación Digital: Liderando la Innovación', provider: 'Cert.', year: '2026' },
                { title: 'Acelerador de Carrera con Power BI + IA', provider: 'Cert.', year: '2026' },
                { title: 'Inmersión en Inteligencia Artificial en la Práctica', provider: 'Cert.', year: '2026' },
                { title: 'Scrum Foundation Professional Certificate — SFPC™', provider: 'CertiProf', year: '' },
              ].map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-blue-500" />
                  <p className="text-sm flex-1 text-slate-800 dark:text-slate-200 font-medium">
                    {cert.title}
                  </p>
                  <span className="text-xs text-slate-400 dark:text-slate-600 font-mono flex-shrink-0">
                    {cert.provider}{cert.year && ` · ${cert.year}`}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
