import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const svgPath = path.join(publicDir, 'favicon.svg');

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(svgPath);

  // 生成不同尺寸的 PNG
  const sizes = [16, 32, 180];

  for (const size of sizes) {
    const outputName = size === 180
      ? 'apple-touch-icon.png'
      : `favicon-${size}x${size}.png`;

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, outputName));

    console.log(`Generated: ${outputName}`);
  }

  // 生成 favicon.ico（包含 16x16 和 32x32）
  const ico16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();

  const icoBuffer = await pngToIco([ico16, ico32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated: favicon.ico');

  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
