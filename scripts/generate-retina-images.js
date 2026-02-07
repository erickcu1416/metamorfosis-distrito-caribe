const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const imagesDir = path.join(__dirname, '../public/images')
const images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'))

async function generateRetinaImages() {
  console.log('🎨 Generando imágenes Retina estilo Apple...\n')

  for (const img of images) {
    const inputPath = path.join(imagesDir, img)
    const baseName = img.replace('.png', '')

    console.log(`📸 Procesando ${img}...`)

    // Detectar si es web o mobile por dimensiones
    const metadata = await sharp(inputPath).metadata()
    const isWeb = metadata.width > metadata.height

    // Tamaños para @1x (estándar)
    const size1x = isWeb
      ? { width: 1920, height: 1080 }
      : { width: 1080, height: 1920 }

    // Tamaños para @2x (Retina/4K)
    const size2x = isWeb
      ? { width: 3840, height: 2160 }  // 4K
      : { width: 2160, height: 3840 }

    try {
      // Generar AVIF @1x
      await sharp(inputPath)
        .resize(size1x.width, size1x.height, {
          fit: 'cover',
          position: 'center'
        })
        .sharpen({ sigma: 0.5 })  // Sharpening sutil
        .avif({ quality: 85, effort: 6 })
        .toFile(path.join(imagesDir, `${baseName}-1x.avif`))

      console.log(`  ✓ ${baseName}-1x.avif (~300KB)`)

      // Generar AVIF @2x (Retina)
      await sharp(inputPath)
        .resize(size2x.width, size2x.height, {
          fit: 'cover',
          position: 'center',
          kernel: 'lanczos3'  // Mejor algoritmo para upscaling
        })
        .sharpen({ sigma: 0.8 })  // Sharpening más agresivo para @2x
        .avif({ quality: 90, effort: 6 })
        .toFile(path.join(imagesDir, `${baseName}-2x.avif`))

      console.log(`  ✓ ${baseName}-2x.avif (~800KB) [Retina]`)

      // Generar WebP @1x (fallback)
      await sharp(inputPath)
        .resize(size1x.width, size1x.height, {
          fit: 'cover',
          position: 'center'
        })
        .sharpen({ sigma: 0.5 })
        .webp({ quality: 85 })
        .toFile(path.join(imagesDir, `${baseName}-1x.webp`))

      // Generar WebP @2x (fallback)
      await sharp(inputPath)
        .resize(size2x.width, size2x.height, {
          fit: 'cover',
          position: 'center',
          kernel: 'lanczos3'
        })
        .sharpen({ sigma: 0.8 })
        .webp({ quality: 90 })
        .toFile(path.join(imagesDir, `${baseName}-2x.webp`))

      console.log(`  ✓ WebP fallbacks generados\n`)
    } catch (error) {
      console.error(`  ❌ Error procesando ${img}:`, error.message)
    }
  }

  console.log('✅ ¡Todas las imágenes procesadas con éxito!')
  console.log('\n📊 Resumen:')
  console.log(`   - ${images.length} imágenes originales`)
  console.log(`   - ${images.length * 4} archivos generados (AVIF + WebP, 1x + 2x)`)
  console.log('   - Formatos: AVIF (mejor calidad) + WebP (fallback)')
  console.log('   - Resoluciones: 1x (estándar) + 2x (Retina)')
  console.log('\n🚀 Listo para usar en la web!')
}

generateRetinaImages().catch(console.error)
