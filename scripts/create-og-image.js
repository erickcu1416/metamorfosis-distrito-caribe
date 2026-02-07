const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/flyer-oficial.jpg');
const outputPath = path.join(__dirname, '../public/og-image.jpg');

console.log('📸 Creando imagen Open Graph optimizada para WhatsApp/Facebook...\n');

async function createOGImage() {
  try {
    // Facebook/WhatsApp optimal size: 1200x630
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(outputPath);

    const stats = require('fs').statSync(outputPath);
    console.log(`✅ Imagen Open Graph creada: og-image.jpg`);
    console.log(`   Dimensiones: 1200x630px (óptimo para WhatsApp/Facebook)`);
    console.log(`   Tamaño: ${(stats.size / 1024).toFixed(0)}KB\n`);
    console.log('🎯 Usar en metadata: url: "/og-image.jpg"');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createOGImage();
