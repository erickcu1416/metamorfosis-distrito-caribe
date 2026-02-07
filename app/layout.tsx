import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
  description: 'Congreso Nacional Juvenil 2026 - Paquete Oficial Distrito Caribe. 27 de julio al 2 de agosto. Transporte, hospedaje, parques y mas.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
