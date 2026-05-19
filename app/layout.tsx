import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon-circle.png',
    apple: '/favicon-circle.png',
  },
  title: 'Jorge Benavides — Product Owner & Software Developer',
  description:
    'Profesional con más de 3 años en fintech. Desarrollador de Software en transición a Product Owner. Visión técnica + entrega de valor.',
  keywords: [
    'Product Owner',
    'Software Developer',
    'Medellín',
    '.NET',
    'Scrum',
    'Fintech',
    'Jorge Benavides',
  ],
  authors: [{ name: 'Jorge Benavides Nati' }],
  openGraph: {
    title: 'Jorge Benavides — Product Owner & Software Developer',
    description: 'Visión técnica + entrega de valor.',
    url: 'https://jorgebenavides.co',
    siteName: 'Jorge Benavides',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jorge Benavides — Product Owner & Software Developer',
    description: 'Visión técnica + entrega de valor.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>{children}</body>
    </html>
  )
}
