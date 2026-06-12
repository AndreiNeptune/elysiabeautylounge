const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const url = "https://images.fresha.com/locations/location-profile-images/2655167/5754448/690a5e68-15ef-4b07-815f-b0de4272a20c-ElysiaBeautyLounge-RO-Bucureti-Bucureti-BucuretiSectorul3-Fresha.jpg?class=gallery-modal-large&watermark=true&f_width=1920";

const outputName = 'epilare-definitiva-elysia-1.webp';
const outputPath = path.join(__dirname, 'public', 'images', 'gallery', outputName);

async function downloadAndOptimize() {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer'
    });
    
    await sharp(response.data)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Successfully saved ${outputName}`);
  } catch (err) {
    console.error(`Failed: ${err.message}`);
  }
}

downloadAndOptimize();
