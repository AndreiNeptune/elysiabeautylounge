const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Replace <div class="service-slider"> with <div class="service-grid">
  if (content.includes('class="service-slider"')) {
    content = content.replace(/class="service-slider"/g, 'class="service-grid"');
    modified = true;
  }
  
  // Also fix the mistake made in sprancene.html
  if (content.includes('class="service-grid-section reveal"')) {
    content = content.replace(/class="service-grid-section reveal"/g, 'class="service-slider-section reveal"');
    modified = true;
  }

  // Replace service-slider__item with service-grid__item
  if (content.includes('service-slider__item')) {
    content = content.replace(/service-slider__item/g, 'service-grid__item');
    modified = true;
  }

  // Add the load more button after the closing div of service-grid if it doesn't exist
  if (content.includes('class="service-grid"') && !content.includes('load-more-btn')) {
    content = content.replace(/(<\/div>\s*<\/section>)/, `  <div class="load-more-container"><button class="btn btn--outline load-more-btn">Vezi mai multe poze</button></div>\n      $1`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
