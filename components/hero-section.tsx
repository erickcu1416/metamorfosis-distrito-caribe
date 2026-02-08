"use client"

import { Calendar, MapPin } from "lucide-react"
import { VideoBackground } from "./video-background"

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Smart Loading */}
      <VideoBackground
        webSrc="/videos/hero-web.webm"
        mobileSrc="/videos/hero-mobile.webm"
        posterWeb="/videos/hero-web-poster.jpg"
        posterMobile="/videos/hero-mobile-poster.jpg"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-sm text-[#c4b5fd] backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          Paquete Oficial Distrito Caribe
        </div>

        {/* Title */}
        <h1 className="mb-2 text-balance text-5xl font-black uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-[#c4b5fd] via-foreground to-[#c4b5fd] bg-clip-text text-transparent">
            Meta
          </span>
          <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#a78bfa] to-[#10B981] bg-clip-text text-transparent">
            morfosis
          </span>
        </h1>

        <p className="mb-2 text-lg font-semibold uppercase tracking-[0.3em] text-[#10B981] md:text-xl">
          Congreso Nacional Juvenil 2026
        </p>

        {/* Date & Location */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-muted-foreground md:gap-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#8B5CF6]" />
            <span className="text-sm md:text-base">27 Julio - 2 Agosto, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#10B981]" />
            <span className="text-sm md:text-base">San Luis Potosí, Mexico</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5219981869770?text=Hola%2C%20quiero%20registrarme%20en%20Metamorfosis%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#10B981] px-8 py-4 text-base font-bold text-[#0a0014] shadow-lg shadow-[#10B981]/25 transition-all hover:bg-[#34d399] hover:shadow-[#10B981]/40 hover:scale-105"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Registrarme ahora
          </a>
          <a
            href="#paquete"
            className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-8 py-4 text-base font-semibold text-[#c4b5fd] backdrop-blur-sm transition-all hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50"
          >
            Ver paquete completo
          </a>
        </div>

        {/* Countdown hint */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {[
            { value: "7", label: "Dias" },
            { value: "4", label: "Noches" },
            { value: "2", label: "Parques" },
            { value: "2", label: "Hoteles" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-black text-foreground md:text-3xl">{item.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-[#8B5CF6]/40 flex items-start justify-center pt-1.5">
          <div className="h-2 w-1 rounded-full bg-[#8B5CF6]" />
        </div>
      </div>
    </section>
  )
}
