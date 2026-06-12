const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'epilare-definitiva.html');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div class="service-grid">[\s\S]*?<\/div>\s*<div class="load-more-container"/m;
const replacement = `<div class="service-grid">\n        <div class="service-grid__item"><img src="/images/gallery/epilare-definitiva-elysia-1.webp" alt="Epilare Definitivă Elysia Beauty Lounge" loading="lazy"></div>\n      </div>\n      <div class="load-more-container"`;

content = content.replace(regex, replacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated epilare-definitiva.html");
