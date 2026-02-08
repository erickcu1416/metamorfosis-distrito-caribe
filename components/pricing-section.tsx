"use client"

import { Check, Calendar, ShoppingBag } from "lucide-react"

const payments = [
  { date: "15 Feb 2026", amount: "$1,500", label: "Inscripcion" },
  { date: "15 Mar 2026", amount: "$1,350", label: "2do pago" },
  { date: "15 Abr 2026", amount: "$1,350", label: "3er pago" },
  { date: "15 May 2026", amount: "$1,350", label: "4to pago" },
  { date: "15 Jun 2026", amount: "$1,350", label: "5to pago" },
  { date: "15 Jul 2026", amount: "$1,350", label: "6to pago" },
]

const included = [
  "Playera Oficial",
  "Pin Oficial",
  "Transporte ida y vuelta + traslados al evento",
  "4 noches de hospedaje (1 en Puebla, 3 en San Luis)",
  "Entrada a Volcanick Park",
  "Entrada a Kataplum",
  "Visita al mercado de Orizaba",
  "Paseo en el Parque Analco",
]

const merch = [
  { name: "Sudadera", price: "$250 MXN (aprox.)", note: "Pendiente de confirmar" },
  { name: "Gorra", price: "$80 MXN", note: null },
]

export function PricingSection() {
  return (
    <section id="precios" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5CF6]">
            Precio y pagos
          </p>
          <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Invierte en tu experiencia
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Paquete completo con facilidades de pago en 6 mensualidades de febrero a julio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Total price card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#10B981]/30 bg-card p-8 text-center shadow-2xl shadow-[#10B981]/10 ring-1 ring-[#10B981]/20 lg:col-span-2">
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#10B981]">
              Paquete completo
            </p>
            <div className="my-4">
              <span className="text-6xl font-black text-foreground">$8,250</span>
              <span className="ml-2 text-lg text-muted-foreground">MXN</span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              6 pagos de feb a jul 2026
            </p>
            <a
              href="https://wa.me/5219981869770?text=Hola%2C%20quiero%20registrarme%20en%20Metamorfosis%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#10B981] py-3.5 text-center text-sm font-bold text-[#0a0014] shadow-lg shadow-[#10B981]/25 transition-all hover:scale-[1.02] hover:bg-[#34d399]"
            >
              Registrarme por WhatsApp
            </a>

            {/* Included list */}
            <div className="mt-8 w-full border-t border-border pt-6 text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#10B981]">
                Incluye
              </p>
              <ul className="space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment schedule + merch */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {/* Payment schedule */}
            <div className="rounded-2xl border border-[#8B5CF6]/20 bg-card p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-[#8B5CF6]/10 p-2">
                  <Calendar className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Calendario de Pagos</h3>
              </div>

              <div className="space-y-3">
                {payments.map((payment, index) => (
                  <div
                    key={payment.date}
                    className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-5 py-3.5 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8B5CF6]/10 text-xs font-bold text-[#8B5CF6]">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{payment.label}</p>
                        <p className="text-xs text-muted-foreground">{payment.date}</p>
                      </div>
                    </div>
                    <span className={`text-lg font-black ${index === 0 ? "text-[#10B981]" : "text-foreground"}`}>
                      {payment.amount}
                      <span className="ml-1 text-xs font-normal text-muted-foreground">MXN</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-[#10B981]/30 bg-[#10B981]/5 px-5 py-3.5">
                <span className="text-sm font-bold text-[#10B981]">Total</span>
                <span className="text-xl font-black text-[#10B981]">
                  $8,250 <span className="text-xs font-normal">MXN</span>
                </span>
              </div>
            </div>

            {/* Optional merch */}
            <div className="rounded-2xl border border-[#8B5CF6]/20 bg-card p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-[#8B5CF6]/10 p-2">
                  <ShoppingBag className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Merch Opcional</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {merch.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-5 py-3.5"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      {item.note && <p className="text-xs text-muted-foreground">{item.note}</p>}
                    </div>
                    <span className="text-sm font-bold text-[#8B5CF6]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
