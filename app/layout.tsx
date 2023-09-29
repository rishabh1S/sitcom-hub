import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Sitcom Hub',
  description: 'Watch your favourite sitcom for free',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
