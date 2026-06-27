const fs = require('fs');
const path = require('path');
const distDir = path.join(__dirname, 'dist');
const files = fs.readdirSync(distDir);
files.forEach(file => {
  if (file.endsWith('.html') && file !== 'index.html') {
    const folderName = file.replace('.html', '');
    const folderPath = path.join(distDir, folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    fs.renameSync(path.join(distDir, file), path.join(folderPath, 'index.html'));
    console.log(`Moved ${file} to ${folderName}/index.html`);
  }
});
