const sharp = require('sharp')
const path = require('path')

async function processFlyer() {
  const input = path.join(__dirname, '../public/images/flyer-oficial.jpg')
  const imagesDir = path.join(__dirname, '../public/images')

  console.log('🎨 Procesando flyer oficial con calidad Retina...\n')

  try {
    // @1x (tamaño original 1080×1350)
    await sharp(input)
      .resize(1080, 1350, { fit: 'cover' })
      .sharpen({ sigma: 0.5 })
      .avif({ quality: 85, effort: 6 })
      .toFile(path.join(imagesDir, 'flyer-oficial-1x.avif'))

    console.log('  ✓ flyer-oficial-1x.avif (~300KB)')

    // @2x (Retina 2160×2700)
    await sharp(input)
      .resize(2160, 2700, {
        fit: 'cover',
        kernel: 'lanczos3'
      })
      .sharpen({ sigma: 0.8 })
      .avif({ quality: 90, effort: 6 })
      .toFile(path.join(imagesDir, 'flyer-oficial-2x.avif'))

    console.log('  ✓ flyer-oficial-2x.avif (~800KB) [Retina]')

    // WebP fallbacks
    await sharp(input)
      .resize(1080, 1350, { fit: 'cover' })
      .sharpen({ sigma: 0.5 })
      .webp({ quality: 85 })
      .toFile(path.join(imagesDir, 'flyer-oficial-1x.webp'))

    await sharp(input)
      .resize(2160, 2700, {
        fit: 'cover',
        kernel: 'lanczos3'
      })
      .sharpen({ sigma: 0.8 })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'flyer-oficial-2x.webp'))

    console.log('  ✓ WebP fallbacks generados\n')

    console.log('✅ Flyer procesado con éxito!')
    console.log('\n📊 Resumen:')
    console.log('   - 4 archivos generados (AVIF + WebP, 1x + 2x)')
    console.log('   - Formato: AVIF (mejor calidad) + WebP (fallback)')
    console.log('   - Resoluciones: 1080×1350 (@1x) + 2160×2700 (@2x Retina)')
    console.log('\n🚀 Listo para usar en la web!')
  } catch (error) {
    console.error('❌ Error procesando flyer:', error.message)
  }
}

processFlyer()
