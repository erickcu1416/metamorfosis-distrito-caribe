"use client"

import React from "react"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import {
  Bus,
  Hotel,
  Ticket,
  MapPin,
  Shirt,
  Check,
  Sparkles,
  ChevronDown,
} from "lucide-react"

import { ResponsiveImage } from "./responsive-image"

/* ------------------------------------------------------------------ */
/*  Performant scroll-linked animation hook (rAF-based, no setState   */
/*  thrashing).  Writes directly to a CSS custom property so React    */
/*  never re-renders — only the GPU composites.                       */
/* ------------------------------------------------------------------ */
function useScrollProperty(
  propName: string,
  calc: (rect: DOMRect, vh: number) => number
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const tick = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const v = calc(rect, vh)
      el.style.setProperty(propName, String(v))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [propName, calc])

  return ref
}

/* ------------------------------------------------------------------ */
/*  React-state based scroll progress (for content that needs re-     */
/*  render, like staggered children opacity).                         */
/* ------------------------------------------------------------------ */
function useProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const tick = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = 1 - r.top / vh
      setP(Math.min(1, Math.max(0, raw)))
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [])

  return { ref, p }
}

function clamp(v: number, lo = 0, hi = 1) {
  return Math.min(hi, Math.max(lo, v))
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const features = [
  {
    id: "transporte",
    images: {
      web: "/images/transporte-web.png",
      mobile: "/images/transporte-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    icon: Bus,
    title: "Transporte",
    headline: "Viaja comodo y seguro",
    body: "Autobus directo desde Cancun con todos los traslados internos incluidos durante el viaje completo.",
    tags: ["Ida y vuelta", "Traslados internos", "Aire acondicionado"],
    color: "#10B981",
  },
  {
    id: "hospedaje",
    images: {
      web: "/images/hospedaje-web.png",
      mobile: "/images/hospedaje-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center 45%",
    },
    icon: Hotel,
    title: "Hospedaje",
    headline: "Descansa como mereces",
    body: "4 noches en hoteles comodos con desayuno buffet incluido. 1 noche en Puebla y 3 noches en San Luis Potosi.",
    tags: ["4 noches", "Desayuno buffet", "Ubicacion centrica"],
    color: "#8B5CF6",
  },
  {
    id: "volcanic",
    images: {
      web: "/images/volcanic-park-web.png",
      mobile: "/images/volcanic-park-mobile.png",
    },
    objectPosition: {
      web: "center 60%",
      mobile: "center 50%",
    },
    icon: Ticket,
    title: "Volcanic Park",
    headline: "Adrenalina al maximo",
    body: "Más de 20 atracciones en un parque temático volcánico.",
    tags: ["Más de 20 atracciones", "Parque temático", "Entrada incluida"],
    color: "#10B981",
  },
  {
    id: "kataplum",
    images: {
      web: "/images/kataplum-web.png",
      mobile: "/images/kataplum-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center 45%",
    },
    icon: Ticket,
    title: "iKataplum!",
    headline: "Diversiones extremas",
    body: "Atracciones mecanicas, juegos clasicos y shows en vivo en uno de los mejores parques de Mexico.",
    tags: ["Atracciones extremas", "Shows en vivo", "Entrada incluida"],
    color: "#8B5CF6",
  },
  {
    id: "cultura",
    images: {
      web: "/images/cultura-web.png",
      mobile: "/images/cultura-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center 50%",
    },
    icon: MapPin,
    title: "Lugares increibles",
    headline: "Cultura y sabor",
    body: "Visita el Mercado de Orizaba, pasea por el Parque Analco y recorre el corazon historico de Puebla.",
    tags: ["Mercado de Orizaba", "Parque Analco", "Centro de Puebla"],
    color: "#10B981",
  },
  {
    id: "kit",
    images: {
      web: "/images/kit-web.png",
      mobile: "/images/kit-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    icon: Shirt,
    title: "Kit oficial",
    headline: "Lleva el recuerdo",
    body: "Playera y pin oficial de Metamorfosis 2026 mas registro completo a cada servicio del Congreso Nacional.",
    tags: ["Playera oficial", "Pin coleccionable", "Registro completo"],
    color: "#8B5CF6",
  },
]

/* ------------------------------------------------------------------ */
/*  Single full-viewport slide                                        */
/*  - BG image moves via CSS custom property (GPU only, no re-render) */
/*  - Content uses React state for stagger animations                 */
/* ------------------------------------------------------------------ */
function Slide({
  f,
  index,
  total,
}: {
  f: (typeof features)[number]
  index: number
  total: number
}) {
  /* CSS-variable driven parallax (no React re-render) */
  const parallaxCalc = useCallback(
    (rect: DOMRect, vh: number) => {
      const center = rect.top + rect.height / 2
      const offset = (center - vh / 2) / vh // -0.5 .. 0.5 when centered
      return offset * -30 // px shift
    },
    []
  )
  const wrapRef = useScrollProperty("--img-y", parallaxCalc)

  /* Scale calc */
  const scaleCalc = useCallback(
    (rect: DOMRect, vh: number) => {
      const t = clamp(1 - rect.top / vh)
      return 1 + (1 - t) * 0.05 // 1.05 → 1.0
    },
    []
  )
  useScrollProperty("--img-s", scaleCalc)

  /* Content progress (React state for stagger) */
  const { ref: contentRef, p } = useProgress()

  const contentT = clamp((p - 0.2) / 0.5)
  const isFirst = index === 0
  const isEven = index % 2 === 0

  return (
    <div
      ref={(el) => {
        // Merge both refs
        ;(wrapRef as React.MutableRefObject<HTMLDivElement | null>).current = el
        ;(contentRef as React.MutableRefObject<HTMLDivElement | null>).current = el
      }}
      className="relative h-[100svh] w-full overflow-hidden"
      style={
        {
          "--img-y": "0",
          "--img-s": "1.05",
        } as React.CSSProperties
      }
    >
      {/* ---- Background image (GPU composited via CSS vars) ---- */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-10%] will-change-transform"
          style={{
            transform:
              "translate3d(0, calc(var(--img-y) * 1px), 0) scale(var(--img-s))",
          }}
        >
          <ResponsiveImage
            webSrc={f.images?.web || "/placeholder.svg"}
            mobileSrc={f.images?.mobile || "/placeholder.svg"}
            alt={f.headline}
            priority={index < 2}
            objectPosition={f.objectPosition}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-[#0c0a14]/60 to-transparent" />
        <div
          className={`absolute inset-0 hidden md:block ${
            isEven
              ? "bg-gradient-to-r from-[#0c0a14]/90 via-[#0c0a14]/30 to-transparent"
              : "bg-gradient-to-l from-[#0c0a14]/90 via-[#0c0a14]/30 to-transparent"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a14]/50 via-transparent to-transparent" />
      </div>

      {/* ---- Accent glow ---- */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[140px]"
        style={{
          background: f.color,
          bottom: "-10%",
          left: isEven ? "-5%" : "auto",
          right: isEven ? "auto" : "-5%",
        }}
      />

      {/* ---- Content ---- */}
      <div
        className={`relative z-10 flex h-full w-full flex-col justify-end px-6 pb-24 md:justify-center md:pb-0 ${
          isEven
            ? "md:items-start md:pl-16 lg:pl-28"
            : "md:items-end md:pr-16 lg:pr-28"
        }`}
      >
        <div
          className={`max-w-xl ${isEven ? "" : "md:text-right"}`}
          style={{
            opacity: clamp(contentT * 2),
            transform: `translate3d(0, ${(1 - contentT) * 80}px, 0)`,
            willChange: "transform, opacity",
          }}
        >
          {/* Number + label badge */}
          <div
            className={`mb-5 flex items-center gap-4 ${
              isEven ? "" : "md:flex-row-reverse"
            }`}
          >
            <span
              className="text-5xl font-black leading-none md:text-7xl"
              style={{ color: f.color, opacity: 0.2 }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
              style={{
                background: `color-mix(in srgb, ${f.color} 12%, transparent)`,
                border: `1px solid color-mix(in srgb, ${f.color} 25%, transparent)`,
              }}
            >
              <f.icon className="h-4 w-4" style={{ color: f.color }} />
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: f.color }}
              >
                {f.title}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h3
            className="mb-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              opacity: clamp((contentT - 0.1) * 3),
              transform: `translate3d(0, ${clamp(1 - (contentT - 0.1) * 3) * 40}px, 0)`,
            }}
          >
            {f.headline}
          </h3>

          {/* Body */}
          <p
            className="mb-8 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg"
            style={{
              opacity: clamp((contentT - 0.25) * 3),
              transform: `translate3d(0, ${clamp(1 - (contentT - 0.25) * 3) * 30}px, 0)`,
            }}
          >
            {f.body}
          </p>

          {/* Tags */}
          <div
            className={`flex flex-wrap gap-2 ${
              isEven ? "" : "md:justify-end"
            }`}
          >
            {f.tags.map((tag, i) => {
              const tagT = clamp((contentT - 0.35 - i * 0.08) * 4)
              return (
                <span
                  key={tag}
                  className="rounded-full border px-4 py-1.5 text-xs font-bold backdrop-blur-sm"
                  style={{
                    borderColor: `color-mix(in srgb, ${f.color} 25%, transparent)`,
                    background: `color-mix(in srgb, ${f.color} 8%, transparent)`,
                    color: f.color,
                    opacity: tagT,
                    transform: `translate3d(0, ${(1 - tagT) * 20}px, 0)`,
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      {/* ---- Counter ---- */}
      <div
        className={`absolute bottom-8 z-10 flex items-center gap-3 ${
          isEven ? "right-6 md:right-16" : "left-6 md:left-16"
        }`}
      >
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, di) => (
            <div
              key={di}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: di === index ? 24 : 6,
                background:
                  di === index ? f.color : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ---- Scroll hint on first slide ---- */}
      {isFirst && (
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ opacity: clamp(1 - p * 3) }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/25">
            Desliza
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-foreground/25" />
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Horizontal accent line between slides                             */
/* ------------------------------------------------------------------ */
function Divider({ color }: { color: string }) {
  const { ref, p } = useProgress()
  return (
    <div ref={ref} className="relative h-px overflow-hidden">
      <div
        className="h-px w-full origin-left"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          transform: `scaleX(${clamp(p * 3)})`,
          opacity: clamp(p * 4) * 0.4,
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Checklist                                                         */
/* ------------------------------------------------------------------ */
function Summary() {
  const { ref, p } = useProgress()

  const items = [
    "Transporte ida y vuelta desde Cancun",
    "Traslados internos a todos los eventos",
    "4 noches de hospedaje con desayuno",
    "Entrada a Volcanic Park",
    "Entrada a iKataplum!",
    "Tour por Puebla y Mercado de Orizaba",
    "Playera y pin oficial del congreso",
    "Registro al Congreso Nacional",
  ]

  return (
    <div ref={ref} className="relative px-4 py-20 sm:px-6 md:py-32">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#8B5CF6]/20 p-8 md:p-14"
        style={{
          background: `linear-gradient(135deg, 
            color-mix(in srgb, #8B5CF6 6%, hsl(260 20% 8%)),
            hsl(260 20% 8%),
            color-mix(in srgb, #10B981 6%, hsl(260 20% 8%))
          )`,
          opacity: clamp(p * 3),
          transform: `scale(${0.9 + clamp(p * 2) * 0.1})`,
          willChange: "transform, opacity",
        }}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#8B5CF6]/[.08] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#10B981]/[.08] blur-[100px]" />

        <div className="relative">
          <div className="mb-3 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#8B5CF6]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B5CF6]">
                Resumen del paquete
              </span>
            </div>
          </div>

          <h3 className="mb-10 text-center text-3xl font-black uppercase text-foreground md:text-5xl">
            Todo esto{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
              incluido
            </span>
          </h3>

          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {items.map((item, i) => {
              const t = clamp((p - 0.2 - i * 0.04) * 5)
              const accent = i % 2 === 0 ? "#10B981" : "#8B5CF6"
              return (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/60 px-5 py-4 backdrop-blur-sm"
                  style={{
                    opacity: t,
                    transform: `translate3d(${(i % 2 === 0 ? -1 : 1) * (1 - t) * 30}px, 0, 0)`,
                  }}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${accent} 15%, transparent)`,
                    }}
                  >
                    <Check className="h-4 w-4" style={{ color: accent }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {item}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Official flyer                                                    */
/* ------------------------------------------------------------------ */
function Flyer() {
  const { ref, p } = useProgress()
  const t = clamp(p * 2)

  return (
    <div ref={ref} className="relative px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <div
          className="relative overflow-hidden rounded-3xl border border-[#8B5CF6]/30 shadow-2xl shadow-[#8B5CF6]/20"
          style={{
            opacity: t,
            transform: `scale(${0.85 + t * 0.15}) rotate(${(1 - t) * -3}deg)`,
            willChange: "transform, opacity",
          }}
        >
          <picture>
            {/* AVIF - Mejor calidad */}
            <source
              type="image/avif"
              srcSet="/images/flyer-oficial-1x.avif 1x, /images/flyer-oficial-2x.avif 2x"
            />

            {/* WebP - Fallback */}
            <source
              type="image/webp"
              srcSet="/images/flyer-oficial-1x.webp 1x, /images/flyer-oficial-2x.webp 2x"
            />

            {/* JPG - Fallback final */}
            <img
              src="/images/flyer-oficial.jpg"
              alt="Paquete Oficial Distrito Caribe - Metamorfosis 2026"
              className="w-full rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section intro                                                     */
/* ------------------------------------------------------------------ */
function Intro() {
  const { ref, p } = useProgress()
  const t = clamp(p * 2.5)

  return (
    <div
      ref={ref}
      className="relative flex h-[70svh] flex-col items-center justify-center px-6 text-center md:h-[80svh]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(139,92,246,0.08),transparent_70%)]" />

      <div
        style={{
          opacity: t,
          transform: `translate3d(0, ${(1 - t) * 60}px, 0) scale(${0.88 + t * 0.12})`,
          willChange: "transform, opacity",
        }}
      >
        {/* Logo Distrito Caribe */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logo-distrito-caribe.svg"
            alt="Distrito Caribe"
            className="h-16 w-auto opacity-90 md:h-20"
          />
        </div>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-5 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#10B981]">
            Paquete oficial Distrito Caribe
          </span>
        </div>
        <h2 className="mb-6 text-balance text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl md:text-7xl">
          Una experiencia
          <br />
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#a78bfa] to-[#10B981] bg-clip-text text-transparent">
            sin limites
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-xl">
          Tu paquete cubre cada detalle desde que sales de Cancun hasta que
          regresas.
        </p>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/25">
          Descubre
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce text-foreground/25" />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Exported section                                                  */
/* ------------------------------------------------------------------ */
export function PackageSection() {
  return (
    <section id="paquete" className="relative">
      <Intro />

      {features.map((f, i) => (
        <div key={f.id}>
          {i > 0 && <Divider color={f.color} />}
          <Slide f={f} index={i} total={features.length} />
        </div>
      ))}

      <Summary />
      <Flyer />
    </section>
  )
}
