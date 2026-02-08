const sharp = require('sharp')
const path = require('path')

async function createCongresoImages() {
  const inputPath = path.join(process.env.HOME, 'Downloads/CONGRESO_WEB.png')
  const outputDir = path.join(__dirname, '../public/images')

  console.log('📸 Creando imágenes del congreso...\n')

  // 1. Copiar versión web (landscape)
  const webOutput = path.join(outputDir, 'congreso-web.png')
  await sharp(inputPath)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .png({ quality: 100 })
    .toFile(webOutput)

  console.log('✓ congreso-web.png creado')

  // 2. Crear versión mobile (portrait - crop center)
  const mobileOutput = path.join(outputDir, 'congreso-mobile.png')
  await sharp(inputPath)
    .resize(1080, 1920, { fit: 'cover', position: 'center' })
    .png({ quality: 100 })
    .toFile(mobileOutput)

  console.log('✓ congreso-mobile.png creado')
  console.log('\n✅ Listo! Ahora ejecuta: node scripts/optimize-images.js')
}

createCongresoImages().catch(console.error)
