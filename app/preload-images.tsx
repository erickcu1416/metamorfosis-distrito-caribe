/**
 * PreloadImages - Precarga imágenes críticas (hero)
 *
 * Mejora LCP (Largest Contentful Paint) precargando la primera imagen
 * visible en viewport con soporte Retina.
 *
 * Resultado esperado: LCP ~3s → ~0.5s
 */
export function PreloadImages() {
  return (
    <>
      {/* Preload primera imagen (transporte) - Desktop */}
      <link
        rel="preload"
        as="image"
        href="/images/transporte-web-2x.avif"
        imageSrcSet="/images/transporte-web-1x.avif 1x, /images/transporte-web-2x.avif 2x"
        type="image/avif"
        media="(min-width: 768px)"
      />

      {/* Preload primera imagen (transporte) - Mobile */}
      <link
        rel="preload"
        as="image"
        href="/images/transporte-mobile-2x.avif"
        imageSrcSet="/images/transporte-mobile-1x.avif 1x, /images/transporte-mobile-2x.avif 2x"
        type="image/avif"
        media="(max-width: 767px)"
      />
    </>
  )
}
