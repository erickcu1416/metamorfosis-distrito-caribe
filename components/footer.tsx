import { Globe, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-border py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Partners Section */}
        <div className="mb-12 border-b border-border pb-12">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            En alianza con
          </p>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            {/* Distrito Caribe */}
            <img
              src="/logo-distrito-caribe.svg"
              alt="Distrito Caribe"
              className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100 md:h-16"
            />

            {/* Dragonfly */}
            <a
              href="https://www.facebook.com/Dragonflyviajes"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/credits/dragonfly-logo.png"
                alt="Dragonfly Agencia de Viajes"
                className="h-10 w-auto md:h-12"
              />
            </a>
          </div>
        </div>

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
                href="https://wa.me/5219981869770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-[#10B981]"
              >
                <Phone className="h-4 w-4 text-[#10B981]" />
                998 186 9770
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
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Developer Credit */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground">Diseñado y desarrollado por</p>

              {/* Por Su Gracia Producciones - Principal Brand */}
              <a
                href="https://erickchan.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm transition-all group-hover:bg-white/15">
                  <img
                    src="/credits/por-su-gracia-logo.svg"
                    alt="Por Su Gracia Producciones"
                    className="h-12 w-auto md:h-14"
                  />
                </div>
              </a>

              {/* Erick Chan - Personal Brand */}
              <a
                href="https://erickchan.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/credits/erick-chan-logo.svg"
                  alt="Erick Chan - Web Developer"
                  className="h-6 w-auto"
                />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              Paquete Oficial Distrito Caribe | Dragonfly Agencia de Viajes
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
