const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');
const srcDir = __dirname; // to search in HTML, CSS, JS

async function main() {
  const files = fs.readdirSync(dir);
  const imagesToConvert = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  console.log(`Found ${imagesToConvert.length} images to convert.`);
  const convertedNames = [];

  for (const file of imagesToConvert) {
    const filePath = path.join(dir, file);
    const parsed = path.parse(file);
    const outPath = path.join(dir, `${parsed.name}.webp`);

    try {
      await sharp(filePath).webp({ quality: 80 }).toFile(outPath);
      console.log(`Converted: ${file} -> ${parsed.name}.webp`);
      
      // Delete original file
      fs.unlinkSync(filePath);
      
      convertedNames.push({ old: file, new: `${parsed.name}.webp` });
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  // Now search and replace in files
  const extensionsToSearch = ['.html', '.css', '.js'];
  
  function processDirectory(directory) {
    const items = fs.readdirSync(directory);
    for (const item of items) {
      if (item === 'node_modules' || item === 'dist' || item === '.git') continue;
      
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (stat.isFile() && extensionsToSearch.includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        for (const replacement of convertedNames) {
          // We use regex to replace all occurrences of the exact filename
          const regex = new RegExp(replacement.old.replace('.', '\\.'), 'g');
          if (regex.test(content)) {
            content = content.replace(regex, replacement.new);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated references in: ${fullPath}`);
        }
      }
    }
  }

  console.log('\nUpdating references in source files...');
  processDirectory(srcDir);
  console.log('Done.');
}

main().catch(console.error);
