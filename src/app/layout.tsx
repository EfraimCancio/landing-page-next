import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700']
 })

export const metadata: Metadata = {
  title: 'Landing Page Next',
  description: 'Landing page criada para estudar next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
