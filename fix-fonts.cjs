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

const fontLinks = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=optional">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=optional" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=optional">
  </noscript>
`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove existing preconnect and font links
  content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*/gi, '');
  content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*/gi, '');
  content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^>]*>\s*/gi, '');

  // Insert the new async font links right after meta charset and viewport
  // We can insert it just before the title tag
  content = content.replace(/(<title>)/i, fontLinks.trim() + '\n  $1');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated fonts in ${file}`);
});
