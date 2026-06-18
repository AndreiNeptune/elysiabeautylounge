const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// List of pages to convert into directory-based pretty URLs
const pages = [
  'manichiura-pedichiura',
  'coafor-extensii',
  'make-up',
  'sprancene',
  'epilare-definitiva',
  'pachete-beauty',
  'galerie',
  'despre-noi',
  'contact',
  'termeni-si-conditii',
  'politica-de-confidentialitate',
  'politica-cookie'
];

console.log('Post-build: Organizing HTML files into subdirectories for clean URLs...');

pages.forEach(page => {
  const oldPath = path.join(distDir, `${page}.html`);
  const newDir = path.join(distDir, page);
  const newPath = path.join(newDir, 'index.html');

  if (fs.existsSync(oldPath)) {
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
    fs.renameSync(oldPath, newPath);
    console.log(`  ✓ Moved ${page}.html to ${page}/index.html`);
  } else {
    console.log(`  ✗ ${page}.html not found in dist/`);
  }
});

console.log('Post-build: Finished successfully!');
