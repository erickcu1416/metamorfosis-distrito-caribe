"use client"
import Image from "next/image"
import { Bus, MapPin, Ticket, Church, Hotel, Home, ChevronDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

import { ResponsiveImage } from "./responsive-image"

interface TimelineActivity {
  time: string
  activity: string
}

interface TimelineEvent {
  day: string
  date: string
  title: string
  icon: LucideIcon
  color: "purple" | "green"
  images?: { web: string; mobile: string } | null
  objectPosition?: { web?: string; mobile?: string }
  activities: TimelineActivity[]
}

const events: TimelineEvent[] = [
  {
    day: "Dia 1",
    date: "27 Julio",
    title: "Salida desde Cancun",
    icon: Bus,
    color: "purple",
    images: {
      web: "/images/transporte-web.png",
      mobile: "/images/transporte-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    activities: [
      { time: "12:00 pm", activity: "Salida de Cancun hacia Orizaba, Veracruz (con paradas para recoger hermanos sobre la ruta)." },
    ],
  },
  {
    day: "Dia 2",
    date: "28 Julio",
    title: "Orizaba, Volcanic Park y Puebla",
    icon: MapPin,
    color: "green",
    images: {
      web: "/images/volcanic-park-web.png",
      mobile: "/images/volcanic-park-mobile.png",
    },
    objectPosition: {
      web: "center 60%",
      mobile: "center center",
    },
    activities: [
      { time: "08:00 am", activity: "Llegada a Orizaba, Veracruz al mercado para desayunar." },
      { time: "10:00 am", activity: "Salida del mercado hacia Volcanic Park." },
      { time: "12:00 pm", activity: "Llegada a Volcanic Park." },
      { time: "03:00 pm", activity: "Salida de Volcanic Park hacia el hotel en Puebla." },
      { time: "05:00 pm", activity: "Llegada al hotel en Puebla. Tarde libre." },
      { time: "06:30 pm", activity: "Salida hacia el Parque Analco para caminar hacia el Centro." },
      { time: "09:30 pm", activity: "Regreso al hotel." },
    ],
  },
  {
    day: "Dia 3",
    date: "29 Julio",
    title: "Congreso - Dia 1",
    icon: Church,
    color: "purple",
    images: {
      web: "/images/congreso-web.png",
      mobile: "/images/congreso-web.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    activities: [
      { time: "04:00 am", activity: "Salida del hotel hacia San Luis Potosi (salir listos para el congreso)." },
      { time: "11:00 am", activity: "Llegada al Congreso de Jovenes." },
      { time: "02:00 pm", activity: "Salida del congreso hacia el hotel." },
      { time: "04:00 pm", activity: "Salida del hotel hacia el congreso." },
      { time: "09:00 pm", activity: "Salida del congreso hacia el hotel." },
    ],
  },
  {
    day: "Dia 4",
    date: "30 Julio",
    title: "Congreso - Dia 2",
    icon: Church,
    color: "green",
    images: {
      web: "/images/congreso-web.png",
      mobile: "/images/congreso-web.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    activities: [
      { time: "08:00 am", activity: "Salida del hotel hacia el congreso." },
      { time: "02:00 pm", activity: "Salida del congreso hacia el hotel." },
      { time: "04:00 pm", activity: "Salida del hotel hacia el congreso." },
      { time: "09:00 pm", activity: "Salida del congreso hacia el hotel." },
    ],
  },
  {
    day: "Dia 5",
    date: "31 Julio",
    title: "Congreso - Dia 3",
    icon: Church,
    color: "purple",
    images: {
      web: "/images/congreso-web.png",
      mobile: "/images/congreso-web.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    activities: [
      { time: "08:00 am", activity: "Salida del hotel hacia el congreso." },
      { time: "02:00 pm", activity: "Salida del congreso hacia el hotel." },
      { time: "04:00 pm", activity: "Salida del hotel hacia el congreso." },
      { time: "09:00 pm", activity: "Salida del congreso hacia el hotel." },
    ],
  },
  {
    day: "Dia 6",
    date: "1 Agosto",
    title: "Kataplum - Parque de Diversiones",
    icon: Ticket,
    color: "green",
    images: {
      web: "/images/kataplum-web.png",
      mobile: "/images/kataplum-mobile.png",
    },
    objectPosition: {
      web: "center center",
      mobile: "center center",
    },
    activities: [
      { time: "05:00 am", activity: "Salida del hotel con maletas en mano hacia Kataplum." },
      { time: "12:00 pm", activity: "Llegada a Kataplum." },
      { time: "04:00 pm", activity: "Salida hacia destinos." },
    ],
  },
  {
    day: "Dia 7",
    date: "2 Agosto",
    title: "Regreso a Casa",
    icon: Home,
    color: "purple",
    image: null,
    activities: [
      { time: "", activity: "Llegada a destinos." },
    ],
  },
]

function TimelineCard({ event }: { event: TimelineEvent }) {
  const [isOpen, setIsOpen] = useState(false)
  const colorClasses =
    event.color === "purple"
      ? {
          dot: "bg-[#8B5CF6]",
          dotGlow: "bg-[#8B5CF6]/20",
          border: "border-[#8B5CF6]/20",
          iconBg: "bg-[#8B5CF6]/10",
          iconColor: "text-[#8B5CF6]",
          dayColor: "text-[#8B5CF6]",
          timeBg: "bg-[#8B5CF6]/10",
          timeColor: "text-[#c4b5fd]",
        }
      : {
          dot: "bg-[#10B981]",
          dotGlow: "bg-[#10B981]/20",
          border: "border-[#10B981]/20",
          iconBg: "bg-[#10B981]/10",
          iconColor: "text-[#10B981]",
          dayColor: "text-[#10B981]",
          timeBg: "bg-[#10B981]/10",
          timeColor: "text-[#6ee7b7]",
        }

  return (
    <div className="relative flex items-start gap-6">
      {/* Timeline dot */}
      <div className="absolute left-6 z-10 -translate-x-1/2 md:left-8">
        <div className={`relative h-4 w-4 rounded-full ${colorClasses.dot}`}>
          <div className={`absolute inset-0 -m-2 rounded-full ${colorClasses.dotGlow} animate-pulse`} />
        </div>
      </div>

      {/* Content card */}
      <div className="ml-12 w-full md:ml-16">
        <div className={`overflow-hidden rounded-xl border ${colorClasses.border} bg-card transition-all hover:bg-muted/30`}>
          {/* Image banner */}
          {event.images && (
            <div className="relative h-40 overflow-hidden">
              <ResponsiveImage
                webSrc={event.images.web}
                mobileSrc={event.images.mobile}
                alt={event.title}
                priority={false}
                objectPosition={event.objectPosition}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
          )}

          {/* Header - clickable */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center gap-3 p-5 text-left"
          >
            <div className={`shrink-0 rounded-lg ${colorClasses.iconBg} p-2`}>
              <event.icon className={`h-4 w-4 ${colorClasses.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${colorClasses.dayColor}`}>
                  {event.day}
                </p>
                <span className="text-xs text-muted-foreground">{"/"}</span>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
              <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
            </div>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Activities - collapsible */}
          {isOpen && (
            <div className="border-t border-border px-5 pb-5 pt-4">
              <div className="space-y-2.5">
                {event.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {act.time ? (
                      <span className={`mt-0.5 shrink-0 rounded-md ${colorClasses.timeBg} px-2 py-0.5 text-xs font-mono font-semibold ${colorClasses.timeColor}`}>
                        {act.time}
                      </span>
                    ) : (
                      <span className={`mt-0.5 shrink-0 rounded-md ${colorClasses.timeBg} px-2 py-0.5 text-xs font-mono font-semibold ${colorClasses.timeColor}`}>
                        --:--
                      </span>
                    )}
                    <p className="text-sm leading-relaxed text-muted-foreground">{act.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function TimelineSection() {
  return (
    <section id="itinerario" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#10B981]">
            7 dias de aventura
          </p>
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Itinerario
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Del 27 de julio al 2 de agosto de 2026. Haz clic en cada dia para ver los detalles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[#8B5CF6]/40 via-[#10B981]/40 to-[#8B5CF6]/40 md:left-8" />

          <div className="space-y-6">
            {events.map((event) => (
              <TimelineCard key={event.day} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
