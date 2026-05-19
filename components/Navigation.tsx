'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#tecnologia', label: 'Tecnología' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      setDark(false)
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = links.map((l) => l.href.replace('#', ''))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-navy-950/50'
          : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/iconjobn.png"
            alt="Logo jbenavides"
            width={32}
            height={32}
            className="rounded-full group-hover:opacity-90 transition-opacity duration-200"
            priority
          />
          <span className="font-semibold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
            jbenavides
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass hover:scale-105 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Sun size={18} className="text-blue-300" />
            ) : (
              <Moon size={18} className="text-slate-600" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl glass transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10"
          >
            <ul className="px-6 py-5 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
