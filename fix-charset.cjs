const fs = require('fs');
const path = require('path');

const files = [
  'coafor-extensii.html',
  'contact.html',
  'despre-noi.html',
  'epilare-definitiva.html',
  'galerie.html',
  'index.html',
  'make-up.html',
  'manichiura-pedichiura.html',
  'pachete-beauty.html',
  'politica-cookie.html',
  'politica-de-confidentialitate.html',
  'sprancene.html',
  'termeni-si-conditii.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove existing charset meta tag if it exists
  content = content.replace(/\s*<meta\s+charset="UTF-8">\s*/i, '\n');

  // Insert charset meta tag right after <head>
  content = content.replace(/<head>/i, '<head>\n  <meta charset="UTF-8">');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
