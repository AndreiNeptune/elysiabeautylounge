const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const packageUrls = [
  "https://images.fresha.com/partner-portfolios/providers/2655167/2d3fb0b8-35a7-468e-82a6-fab2a2d21859.jpg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=CzB/0DVgAsYvovBPkyQ8lwcXf0Q&f_width=1920"
];

const makeupUrls = [
  "https://images.fresha.com/partner-portfolios/providers/2655167/ca04ca4a-e00c-45d8-837f-0825b6700022.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=pchJCLN4y1vU2r9uMdwNKyV6uPI&f_width=1920",
  "https://images.fresha.com/partner-portfolios/providers/2655167/08b809e2-ae3f-4f8b-be02-68fb893530bd.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=XlSRah9ihCGT0acJpYMK6ynMP4c&f_width=1920",
  "https://images.fresha.com/partner-portfolios/providers/2655167/7c08cdcf-9e01-4e4b-b172-164031121140.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=e8P0kYQN0FiVqzFgRTDl/Pfvx9o&f_width=1920",
  "https://images.fresha.com/partner-portfolios/providers/2655167/0f8fdc40-152f-423d-b4b1-e5c1d0c1d17e.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=7atE6aFml7pVZSuEqZyRsdojF9I&f_width=1920",
  "https://images.fresha.com/partner-portfolios/providers/2655167/2b6a9f67-2315-42b2-828a-8d9db3e40350.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=zF3+KUDuOi7fKEsdoJB7B35gYmI&f_width=1920",
  "https://images.fresha.com/partner-portfolios/providers/2655167/c5a7663f-a1a4-4122-9489-77fc424eae5f.jpeg?class=width-xlarge&dpr=1&keyId=rl8WOyy9WOMLne9A&signature=t2VmMKX/zZFkAJwghM19CE0EoNg&f_width=1920"
];

const urls = [...packageUrls, ...makeupUrls];
const seoNames = [
  "pachete-beauty-new-5",
  "makeup-elysia-6",
  "makeup-elysia-7",
  "makeup-elysia-8",
  "makeup-elysia-9",
  "makeup-elysia-10",
  "makeup-elysia-11"
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
