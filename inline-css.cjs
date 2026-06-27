const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const assetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.log('No assets dir found.');
  process.exit(0);
}

// Find all CSS files
const files = fs.readdirSync(assetsDir);
const cssFiles = files.filter(f => f.endsWith('.css'));

if (cssFiles.length === 0) {
  console.log('No CSS files found to inline.');
  process.exit(0);
}

// Read CSS content
let combinedCss = '';
cssFiles.forEach(file => {
  combinedCss += fs.readFileSync(path.join(assetsDir, file), 'utf8');
});

// Find all HTML files in dist
const htmlFiles = fs.readdirSync(distDir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace all <link rel="stylesheet"> that point to our CSS with <style>
  // We use a regex that matches the link tag
  html = html.replace(/<link\s+rel="stylesheet"\s+crossorigin\s+href="\/assets\/[^"]+\.css">/gi, '');
  html = html.replace(/<link\s+crossorigin\s+href="\/assets\/[^"]+\.css"\s+rel="stylesheet">/gi, '');
  
  // To be completely safe and generic:
  html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="\/assets\/[^>]*\.css"[^>]*>/gi, '');
  html = html.replace(/<link[^>]*href="\/assets\/[^>]*\.css"[^>]*rel="stylesheet"[^>]*>/gi, '');

  // Inject the combined CSS into the head
  html = html.replace(/<\/head>/i, `<style>${combinedCss}</style>\n</head>`);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Inlined CSS into ${file}`);
});

// Optionally delete the CSS files
cssFiles.forEach(file => {
  fs.unlinkSync(path.join(assetsDir, file));
  console.log(`Deleted ${file}`);
});

console.log('CSS inlining complete!');
