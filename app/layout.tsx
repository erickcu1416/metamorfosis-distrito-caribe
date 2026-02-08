import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { PreloadImages } from './preload-images'
import { StructuredData } from './structured-data'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://metamorfosis.jovenesdistritocaribe.com'),
  title: {
    default: 'Metamorfosis 2026 | Congreso Nacional Juvenil - Paquete Distrito Caribe',
    template: '%s | Metamorfosis 2026',
  },
  description: '🎉 Vive Metamorfosis 2026 con el Paquete Oficial Distrito Caribe. 7 días, 4 noches, 2 hoteles, 2 parques. 27 julio - 2 agosto. Transporte, hospedaje y más incluido. ¡Inscríbete ya!',
  keywords: [
    'Metamorfosis 2026',
    'Congreso Nacional Juvenil',
    'Distrito Caribe',
    'Paquete Distrito Caribe',
    'Jóvenes México',
    'Congreso Juvenil Puebla',
    'Congreso Juvenil San Luis Potosí',
    'Viaje Jóvenes México',
    'Dragonfly Agencia Viajes',
    'Cancún Puebla',
    'Cancún San Luis Potosí',
    'Julio 2026',
    'Agosto 2026',
  ],
  authors: [{ name: 'Por Su Gracia Producciones', url: 'https://erickchan.dev' }],
  creator: 'Erick Chan',
  publisher: 'Distrito Caribe',

  // Canonical URL
  alternates: {
    canonical: 'https://metamorfosis.jovenesdistritocaribe.com',
  },

  // Open Graph - Optimizado para Facebook/WhatsApp
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://metamorfosis.jovenesdistritocaribe.com',
    title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
    description: '🎉 ¡Vive una experiencia sin límites! 7 días • 4 noches • 2 hoteles • 2 parques. Del 27 julio al 2 agosto 2026. Paquete Oficial Distrito Caribe. ¡Inscríbete ya!',
    siteName: 'Metamorfosis 2026',
    images: [
      {
        url: 'https://metamorfosis.jovenesdistritocaribe.com/og-image.jpg',
        secureUrl: 'https://metamorfosis.jovenesdistritocaribe.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metamorfosis 2026 - Congreso Nacional Juvenil - Paquete Distrito Caribe',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Cards - Optimizado para compartir
  twitter: {
    card: 'summary_large_image',
    title: 'Metamorfosis 2026 | Congreso Nacional Juvenil',
    description: '🎉 7 días inolvidables • 27 julio - 2 agosto 2026 • Paquete Distrito Caribe',
    images: ['https://metamorfosis.jovenesdistritocaribe.com/og-image.jpg'],
    creator: '@DistritoCaribe',
    site: '@Metamorfosis2026',
  },

  // Verification y otros metadatos
  verification: {
    // google: 'tu-código-de-verificación', // Agregar cuando tengas Google Search Console
    // other: {
    //   facebook: 'tu-app-id', // Agregar si tienes Facebook App ID
    // },
  },

  // Robots - Control de indexación
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Formato de categoría
  category: 'Eventos',

  // App Links (opcional para futuras apps)
  // appLinks: {
  //   web: {
  //     url: 'https://metamorfosis2026.com',
  //   },
  // },
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
        {/* Preload critical images */}
        <PreloadImages />

        {/* WhatsApp Preview - Critical for mobile sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Mobile App Capability */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Metamorfosis 2026" />

        {/* Format Detection */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />

        {/* Geo Tags */}
        <meta name="geo.region" content="MX-ROO" />
        <meta name="geo.placename" content="Cancún, Quintana Roo, México" />

        {/* Additional Social Tags */}
        <meta property="og:phone_number" content="+52 998 186 9770" />
        <meta property="og:street-address" content="Distrito Caribe" />
        <meta property="og:locality" content="Cancún" />
        <meta property="og:region" content="Quintana Roo" />
        <meta property="og:country-name" content="México" />

        {/* WhatsApp Specific */}
        <meta property="og:see_also" content="https://www.facebook.com/Dragonflyviajes" />
        <meta property="article:publisher" content="https://www.jovenesdistritocaribe.com" />

        {/* Structured Data for SEO */}
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
