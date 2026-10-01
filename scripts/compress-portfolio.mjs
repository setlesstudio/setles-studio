import sharp from "sharp";
import { stat } from "fs/promises";
import { join, extname } from "path";

const IMAGES_DIR = "./public/images";
const QUALITY = 75;
const MAX_WIDTH = 1200;

const PORTFOLIO_IMAGES = [
  "studio-pink.png",
  "studio-black-two-piece.jpg",
  "studio-pink-2.jpeg",
  "studio-black-dress-female.jpg",
  "luxury-stairs.webp",
  "lifestyle-pink-outfit-cafe.webp",
  "heels-product.jpeg",
  "footwear-heels.png",
  "footwear-heels-2.jpeg",
  "footwear-heels-3.jpeg",
  "heels-product.jpg",
  "heels-image-model-1.jpg",
  "heels-image-model.jpeg",
  "lifestyle-men.png",
  "bags-dress.png",
  "bag-image.png",
  "bags-shoot.jpeg",
  "bags-shoot-2.jpeg",
  "bags-shoot-1.jpeg",
  "bags-shoot-with-model.jpeg",
  "environment-handbag-image.jpg",
  "environment-handbag-image-1.jpg",
  "female-model-with-bag.jpg",
  "handbag-female-image.jpg",
  "studio-long-coat-man-1.jpg",
  "studio-long-coat-man.jpg",
  "lifestyle-beach-pink-dress.jpg",
  "lifestyle-beach-pink-dress-1.jpg",
  "studio-white-shirt-gray-shorts-man.jpeg",
  "studio-white-shirt-gray-shorts-man-1.webp",
  "studio-white-shirt-gray-shorts-man-2.jpg",
  "multiple-models-environment.jpg",
  "lifestyle-robe-balcony.jpg",
  "lifestyle-pink-swimsuit-coast.jpg",
  "lifestyle-plaid-shirt-indoor.jpg",
  "lifestyle-plaid-shirt-indoor-1.jpg",
  "campaign-men-bomber-outdoor.jpg",
  "campaign-men-bomber-outdoor-2.jpeg",
  "campaign-desert-knit-dress-1.jpeg",
  "campaign-desert-knit-dress-2.jpeg",
  "campaign-desert-knit-dress-3.jpeg",
  "campaign-floral-blue-dress-1.jpeg",
  "campaign-floral-blue-dress-2.jpeg",
  "studio-black-bodysuit-front.jpg",
  "studio-black-bodysuit-side.jpg",
  "studio-black-bodysuit-back.jpeg",
  "studio-wave-robe-model.jpg",
  "studio-pink-wave-set.jpg",
  "studio-black-mini-dress-1.jpg",
  "studio-white-cutout-maxi.jpg",
  "studio-white-cutout-maxi-1.jpg",
  "studio-white-cutout-maxi-2.jpg",
  "lifestyle-kids-pink-dress-1.jpg",
  "lifestyle-kids-pink-dress-2.jpg",
  "lifestyle-kids-pink-dress-3.jpg",
  "lifestyle-pink-lounge-set.jpg",
];

let totalSaved = 0;

for (const filename of PORTFOLIO_IMAGES) {
  const filepath = join(IMAGES_DIR, filename);
  try {
    const before = (await stat(filepath)).size;
    const ext = extname(filename).toLowerCase();
    const instance = sharp(filepath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

    let buffer;
    if (ext === ".png") {
      buffer = await instance.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer();
    } else if (ext === ".webp") {
      buffer = await instance.webp({ quality: QUALITY }).toBuffer();
    } else {
      buffer = await instance.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    }

    if (buffer.length < before) {
      await sharp(buffer).toFile(filepath);
      const saved = ((before - buffer.length) / 1024).toFixed(0);
      totalSaved += before - buffer.length;
      console.log(`✓ ${filename}: ${(before / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (saved ${saved}KB)`);
    } else {
      console.log(`- ${filename}: already optimized, skipped`);
    }
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
  }
}

console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
