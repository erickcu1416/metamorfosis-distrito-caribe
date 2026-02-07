import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { PreloadImages } from './preload-images'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
  description: 'Congreso Nacional Juvenil 2026 - Paquete Oficial Distrito Caribe. 27 de julio al 2 de agosto. Transporte, hospedaje, parques y mas.',
  keywords: ['Metamorfosis 2026', 'Congreso Nacional Juvenil', 'Distrito Caribe', 'Jóvenes', 'Puebla', 'San Luis Potosí'],
  authors: [{ name: 'Por Su Gracia Producciones', url: 'https://erickchan.dev' }],
  creator: 'Erick Chan',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://metamorfosis2026.com',
    title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
    description: '🎉 ¡Vive una experiencia sin límites! Transporte, hospedaje, parques y más. 27 julio - 2 agosto 2026. ¡Inscríbete ya!',
    siteName: 'Metamorfosis 2026',
    images: [
      {
        url: '/images/transporte-web.png',
        width: 1920,
        height: 1080,
        alt: 'Metamorfosis 2026 - Congreso Nacional Juvenil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
    description: '🎉 ¡Vive una experiencia sin límites! 27 julio - 2 agosto 2026',
    images: ['/images/transporte-web.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      <head>
        <PreloadImages />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
