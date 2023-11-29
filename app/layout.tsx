import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import  Links from '../components/links'



const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soul Amiga',
  description: 'Communicate intentionally with your soul amiga',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Links />
          </header>
        {children}</body>
        
    </html>
  )
}
