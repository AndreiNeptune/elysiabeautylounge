const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const urls = [
  "https://images.fresha.com/professional-profiles/profile/5936577/25ebc1d9-e0f9-463b-a570-64d5bf2dc760.jpeg?class=width-xlarge&dpr=1&keyId=1NfSCxp8hRdKSmr8&signature=dxddNHo/C4itDH+ShzmZwSZCgSE&f_width=1920",
  "https://images.fresha.com/professional-profiles/profile/5936577/c9882f1e-e471-4f96-baee-9435cca46d0c.jpeg?class=width-xlarge&dpr=1&keyId=1NfSCxp8hRdKSmr8&signature=uY123W0iUSp6G36Hf2zHaPfpJZA&f_width=1920",
  "https://images.fresha.com/professional-profiles/profile/5936577/f94652e2-1bfc-41d5-bb10-0f5e24c2bb00.jpeg?class=width-xlarge&dpr=1&keyId=1NfSCxp8hRdKSmr8&signature=B6Ua88lHxNMXdbKxGj9YZJSCXOQ&f_width=1920"
];

const seoNames = [
  "manichiura-design-modern-elysia-20",
  "unghii-model-french-elysia-21",
  "manichiura-perfecta-elysia-22"
];

const outDir = path.join(__dirname, 'public', 'images', 'gallery');

async function downloadAndConvert() {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const name = seoNames[i];
    console.log(`Downloading ${name}...`);
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const outPath = path.join(outDir, `${name}.webp`);
      
      await sharp(response.data)
        .webp({ quality: 80, effort: 6 })
        .toFile(outPath);
        
      console.log(`Saved ${outPath}`);
    } catch (err) {
      console.error(`Error with ${name}: ${err.message}`);
    }
  }
}

downloadAndConvert();
