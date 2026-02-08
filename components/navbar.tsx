"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#paquete", label: "Paquete" },
  { href: "#itinerario", label: "Itinerario" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
            <span className="text-sm font-black text-foreground">M</span>
          </div>
          <span className="text-lg font-black uppercase tracking-tight text-foreground">
            Metamorfosis
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5219981869770?text=Hola%2C%20quiero%20registrarme%20en%20Metamorfosis%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8B5CF6] px-5 py-2 text-sm font-bold text-foreground transition-all hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-[#8B5CF6]/25"
          >
            Registrarme
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card md:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5219981869770?text=Hola%2C%20quiero%20registrarme%20en%20Metamorfosis%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-[#8B5CF6] px-5 py-3 text-center text-sm font-bold text-foreground transition-all hover:bg-[#7c3aed]"
            >
              Registrarme
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
