const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const imagesDir = path.join(__dirname, '../public/images')
const images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'))

console.log('🎨 Optimizando imágenes para móvil...\n')

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join(imagesDir, img)
    const baseName = img.replace('.png', '')

    // Get image metadata
    const metadata = await sharp(inputPath).metadata()
    const isWeb = metadata.width > metadata.height

    console.log(`📸 Procesando ${img}...`)
    console.log(`   Tamaño original: ${(metadata.size / 1024 / 1024).toFixed(2)}MB`)

    // Tamaños óptimos
    const size1x = isWeb
      ? { width: 1920, height: 1080 }
      : { width: 1080, height: 1920 }

    const size2x = isWeb
      ? { width: 3840, height: 2160 }  // 4K para Retina
      : { width: 2160, height: 3840 }

    // Generar AVIF @1x (mejor compresión)
    const avif1xPath = path.join(imagesDir, `${baseName}-1x.avif`)
    await sharp(inputPath)
      .resize(size1x.width, size1x.height, {
        fit: 'cover',
        position: 'center'
      })
      .sharpen({ sigma: 0.5 })
      .avif({ quality: 85, effort: 6 })
      .toFile(avif1xPath)

    const avif1xSize = fs.statSync(avif1xPath).size
    console.log(`   ✓ ${baseName}-1x.avif (${(avif1xSize / 1024).toFixed(0)}KB)`)

    // Generar AVIF @2x (Retina)
    const avif2xPath = path.join(imagesDir, `${baseName}-2x.avif`)
    await sharp(inputPath)
      .resize(size2x.width, size2x.height, {
        fit: 'cover',
        position: 'center',
        kernel: 'lanczos3'
      })
      .sharpen({ sigma: 0.8 })
      .avif({ quality: 90, effort: 6 })
      .toFile(avif2xPath)

    const avif2xSize = fs.statSync(avif2xPath).size
    console.log(`   ✓ ${baseName}-2x.avif (${(avif2xSize / 1024).toFixed(0)}KB) - Retina`)

    // Generar WebP fallback @1x
    const webp1xPath = path.join(imagesDir, `${baseName}-1x.webp`)
    await sharp(inputPath)
      .resize(size1x.width, size1x.height, { fit: 'cover' })
      .sharpen({ sigma: 0.5 })
      .webp({ quality: 85 })
      .toFile(webp1xPath)

    const webp1xSize = fs.statSync(webp1xPath).size
    console.log(`   ✓ ${baseName}-1x.webp (${(webp1xSize / 1024).toFixed(0)}KB)`)

    // Generar WebP fallback @2x
    const webp2xPath = path.join(imagesDir, `${baseName}-2x.webp`)
    await sharp(inputPath)
      .resize(size2x.width, size2x.height, {
        fit: 'cover',
        kernel: 'lanczos3'
      })
      .sharpen({ sigma: 0.8 })
      .webp({ quality: 90 })
      .toFile(webp2xPath)

    const webp2xSize = fs.statSync(webp2xPath).size
    console.log(`   ✓ ${baseName}-2x.webp (${(webp2xSize / 1024).toFixed(0)}KB) - Retina`)

    // Mostrar reducción
    const totalNew = avif1xSize + avif2xSize + webp1xSize + webp2xSize
    const reduction = ((metadata.size - avif1xSize) / metadata.size * 100).toFixed(1)
    console.log(`   💾 Reducción @1x: ${reduction}% (${(metadata.size / 1024 / 1024).toFixed(2)}MB → ${(avif1xSize / 1024).toFixed(0)}KB)\n`)
  }

  console.log('✅ ¡Optimización completa!')
  console.log('\n📊 Resumen:')
  console.log(`   • ${images.length} imágenes procesadas`)
  console.log(`   • ${images.length * 4} archivos generados (1x, 2x en AVIF y WebP)`)
  console.log(`   • Reducción estimada: ~85-90% del tamaño original`)
}

optimizeImages().catch(console.error)
