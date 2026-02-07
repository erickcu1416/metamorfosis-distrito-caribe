"use client"

interface ResponsiveImageProps {
  webSrc: string
  mobileSrc: string
  alt: string
  priority?: boolean
  objectPosition?: {
    web?: string
    mobile?: string
  }
}

/**
 * ResponsiveImage con soporte Retina (@2x) - Estilo Apple
 *
 * Implementa:
 * - srcset con densidad de píxeles (1x, 2x) para pantallas Retina
 * - AVIF (mejor calidad) con fallback a WebP y PNG
 * - Sharpening aplicado en generación de imágenes
 * - Focal points inteligentes
 * - Lazy loading nativo
 *
 * Calidad visual:
 * - Pantallas normales: Cargan versión @1x (~500KB AVIF)
 * - Pantallas Retina (2x): Cargan versión @2x (~1.2MB AVIF) = Imágenes nítidas
 */
export function ResponsiveImage({
  webSrc,
  mobileSrc,
  alt,
  priority = false,
  objectPosition = { web: "center center", mobile: "center center" },
}: ResponsiveImageProps) {
  // Extraer nombre base (sin extensión) para construir srcset
  const getBaseName = (src: string) => src.replace(/\.(png|jpg|jpeg)$/, '')

  const webBase = getBaseName(webSrc)
  const mobileBase = getBaseName(mobileSrc)

  return (
    <>
      {/* Desktop Picture Element con AVIF + WebP fallback */}
      <picture className="hidden md:block">
        {/* AVIF - Mejor calidad (96%+ browsers) */}
        <source
          type="image/avif"
          srcSet={`${webBase}-1x.avif 1x, ${webBase}-2x.avif 2x`}
          sizes="100vw"
        />

        {/* WebP - Fallback (98%+ browsers) */}
        <source
          type="image/webp"
          srcSet={`${webBase}-1x.webp 1x, ${webBase}-2x.webp 2x`}
          sizes="100vw"
        />

        {/* PNG - Fallback final (100% browsers) */}
        <img
          src={webSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: objectPosition.web }}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
        />
      </picture>

      {/* Mobile Picture Element */}
      <picture className="block md:hidden">
        <source
          type="image/avif"
          srcSet={`${mobileBase}-1x.avif 1x, ${mobileBase}-2x.avif 2x`}
          sizes="100vw"
        />

        <source
          type="image/webp"
          srcSet={`${mobileBase}-1x.webp 1x, ${mobileBase}-2x.webp 2x`}
          sizes="100vw"
        />

        <img
          src={mobileSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: objectPosition.mobile }}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
        />
      </picture>
    </>
  )
}
