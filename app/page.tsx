import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
