"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Cual es la fecha limite para inscribirme?",
    answer: "Te recomendamos inscribirte lo antes posible ya que los lugares son limitados. El primer pago de inscripcion ($1,500 MXN) asegura tu lugar. La ultima mensualidad vence el 15 de julio de 2026.",
  },
  {
    question: "Puedo pagar todo de una sola vez?",
    answer: "Si, puedes realizar el pago completo de $8,250 MXN en una sola exhibicion. Contactanos por WhatsApp para coordinar tu pago.",
  },
  {
    question: "Que incluye el hospedaje?",
    answer: "El paquete incluye 4 noches de hospedaje: 1 noche en Puebla y 3 noches en San Luis Potosi en el hotel City Express Junior. Todos los hospedajes incluyen desayuno tipo buffet.",
  },
  {
    question: "Desde donde sale el autobus?",
    answer: "El autobus sale desde Cancun el 27 de julio a las 12:00 pm. Tambien se hacen paradas en la ruta para recoger hermanos de otras ciudades. Contactanos para mas detalles sobre los puntos de encuentro.",
  },
  {
    question: "La playera y el pin estan incluidos?",
    answer: "Si, el Kit Oficial que incluye playera y pin conmemorativo de Metamorfosis 2026 esta incluido en el precio del paquete.",
  },
  {
    question: "Puedo comprar merch adicional?",
    answer: "Si, ademas del kit incluido puedes adquirir una sudadera ($250 MXN aprox., pendiente de confirmar) y una gorra ($80 MXN) de forma opcional.",
  },
  {
    question: "Necesito llevar comida?",
    answer: "Los desayunos tipo buffet estan incluidos en el hotel. Para las demas comidas, habra oportunidades de comprar alimentos en los destinos y durante las paradas del viaje. Te recomendamos traer algo de dinero extra para comidas y snacks.",
  },
  {
    question: "Que metodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias y depositos. Contactanos por WhatsApp al 998 241 7202 para recibir los datos de pago y coordinar tus mensualidades.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5CF6]">
            Resolvemos tus dudas
          </p>
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Encuentra respuesta a las preguntas mas comunes sobre el paquete.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all ${
                  isOpen
                    ? "border-[#8B5CF6]/30 bg-[#8B5CF6]/5"
                    : "border-border bg-card hover:border-[#8B5CF6]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-[#8B5CF6]" : "text-muted-foreground"}`} />
                  <span className={`flex-1 text-sm font-semibold ${isOpen ? "text-foreground" : "text-foreground/80"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/50 px-6 pb-5 pt-4">
                    <p className="pl-9 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
