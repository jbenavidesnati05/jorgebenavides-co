'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Contacto desde portafolio — ${form.name}`
    const body = `${form.message}\n\nDe: ${form.name}\nEmail: ${form.email}`
    window.location.href = `mailto:jbenavidesnati05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass =
    'w-full glass rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 bg-transparent transition-all duration-200'

  return (
    <section id="contacto" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-blue-500 tracking-[0.2em] uppercase mb-3">
            06. Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-16 max-w-md">
            ¿Tienes un proyecto, una oportunidad o simplemente quieres hablar? Escríbeme.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className={inputClass}
            />
            <textarea
              placeholder="¿En qué puedo ayudarte?"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className={`${inputClass} resize-none`}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar mensaje
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <a
              href="mailto:jbenavidesnati05@gmail.com"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:shadow-sm hover:border-blue-500/20 transition-all group"
            >
              <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/15 transition-all flex-shrink-0">
                <Mail size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  jbenavidesnati05@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass rounded-2xl">
              <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Ubicación</p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Medellín, Colombia
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono mb-3">
                Redes sociales
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/jorge-benavides-productowner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 glass rounded-2xl hover:shadow-sm hover:border-blue-500/20 transition-all group"
                >
                  <Linkedin size={20} className="text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex-1">
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/jorge-benavides-productowner</span>
                </a>

                <a
                  href="https://wa.me/573103917469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 glass rounded-2xl hover:shadow-sm hover:border-green-500/20 hover:bg-green-500/5 transition-all group"
                >
                  <MessageCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex-1">
                    WhatsApp
                  </span>
                  <span className="text-xs text-slate-400 font-mono">+57 310 391 7469</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-sm text-slate-400 dark:text-slate-600">
            © 2026 Jorge Benavides Nati · Medellín, Colombia
          </p>
        </motion.div>
      </div>
    </section>
  )
}
