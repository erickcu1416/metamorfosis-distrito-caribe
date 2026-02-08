export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        {/* Decorative ring */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6]/20">
            <span className="text-2xl font-black text-[#8B5CF6]">M</span>
          </div>
        </div>

        <h2 className="mb-4 text-balance text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
          {"No te quedes fuera"}
        </h2>
        <p className="mb-3 text-lg font-semibold text-[#10B981]">
          Los lugares son limitados
        </p>
        <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
          Aparta tu lugar hoy con solo $1,500 MXN de inscripcion y vive la experiencia Metamorfosis 2026.
          Del 27 de julio al 2 de agosto.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5219981869770?text=Hola%2C%20quiero%20registrarme%20en%20Metamorfosis%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#10B981] px-8 py-4 text-base font-bold text-[#0a0014] shadow-lg shadow-[#10B981]/25 transition-all hover:bg-[#34d399] hover:shadow-[#10B981]/40 hover:scale-105"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Apartar mi lugar ahora
          </a>
          <a
            href="tel:+5219981869770"
            className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-8 py-4 text-base font-semibold text-[#c4b5fd] transition-all hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50"
          >
            Llamar: 998 186 9770
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Dragonfly Agencia de Viajes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
            Paquete Oficial Distrito Caribe
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Cupo limitado
          </span>
        </div>
      </div>
    </section>
  )
}
