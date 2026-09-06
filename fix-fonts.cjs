const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fontUrl = "https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap";

// Fetch the CSS from Google Fonts (with a modern User-Agent to get woff2)
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
};

https.get(fontUrl, options, (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    // Write CSS to HTML files
    htmlFiles.forEach(file => {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      const regex = /<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2[^>]+>/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, `<style>${css}</style>`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Inlined Google Fonts CSS in ${file}`);
      }
    });
  });
}).on('error', err => {
  console.error('Error fetching fonts:', err);
});
