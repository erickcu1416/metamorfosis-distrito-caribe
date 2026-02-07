import { Globe, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-border py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
                <span className="text-sm font-black text-foreground">M</span>
              </div>
              <span className="text-lg font-black uppercase tracking-tight text-foreground">
                Metamorfosis
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Congreso Nacional Juvenil 2026. Una experiencia que transformara tu vida.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/529982417202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-[#10B981]"
              >
                <Phone className="h-4 w-4 text-[#10B981]" />
                9982 41 72 02
              </a>
              <a
                href="https://www.jovenesdistritocaribe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-[#8B5CF6]"
              >
                <Globe className="h-4 w-4 text-[#8B5CF6]" />
                www.jovenesdistritocaribe.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
              Enlaces
            </h3>
            <div className="space-y-3">
              {[
                { href: "#paquete", label: "Paquete incluido" },
                { href: "#precios", label: "Precios" },
                { href: "#itinerario", label: "Itinerario" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Paquete Oficial Distrito Caribe | Dragonfly Agencia de Viajes
          </p>
        </div>
      </div>
    </footer>
  )
}
