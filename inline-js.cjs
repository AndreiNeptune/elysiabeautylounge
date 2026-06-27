const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const htmlFiles = fs.readdirSync(distDir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Find all <script type="module" crossorigin src="/assets/...js"></script>
  const scriptRegex = /<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/g;
  let match;
  
  while ((match = scriptRegex.exec(html)) !== null) {
    const scriptTag = match[0];
    const scriptUrl = match[1];
    
    // Read the JS file
    const jsFilePath = path.join(distDir, scriptUrl.replace(/^\//, ''));
    if (fs.existsSync(jsFilePath)) {
      const jsContent = fs.readFileSync(jsFilePath, 'utf8');
      
      // We must escape </script> inside the JS content just in case
      let safeJsContent = jsContent.replace(/<\/script>/g, '<\\/script>');
      
      // Rewrite relative chunk imports to absolute paths so they resolve correctly on subpages
      safeJsContent = safeJsContent
        .replace(/from\s*["']\.\/([^"']+\.js)["']/g, 'from "/assets/$1"')
        .replace(/import\s*\(\s*["']\.\/([^"']+\.js)["']/g, 'import("/assets/$1"');
      
      // Replace the external script tag with an inline script tag
      html = html.replace(scriptTag, `<script type="module">${safeJsContent}</script>`);
      console.log(`Inlined ${scriptUrl} into ${file}`);
    }
  }

  // Remove modulepreload links for the scripts we just inlined (to avoid unnecessary preloads)
  const preloadRegex = /<link rel="modulepreload" crossorigin href="(\/assets\/[^"]+\.js)">/g;
  html = html.replace(preloadRegex, (match, url) => {
    // If we want to remove all modulepreloads since we are inlining everything:
    return '';
  });
  
  // Clean up any empty modulepreload tags left by Vite
  const emptyPreloadRegex = /<link rel="modulepreload" crossorigin(?:="")? href="\/assets\/[^"]+\.js">/g;
  html = html.replace(emptyPreloadRegex, '');

  fs.writeFileSync(filePath, html);
});

console.log('JS inlining complete!');
