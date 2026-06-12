const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Remove the badly placed load more button
  if (content.includes('class="load-more-container"')) {
    content = content.replace(/\s*<div class="load-more-container"><button class="btn btn--outline load-more-btn">Vezi mai multe poze<\/button><\/div>/g, '');
    modified = true;
  }

  // Insert it after the end of service-grid
  if (content.includes('class="service-grid"')) {
    const parts = content.split('class="service-grid"');
    // The second part contains the inner HTML of service-grid. We need to find its closing div.
    if (parts.length === 2) {
      // Find the position of the closing </div> of service-grid.
      // We can do this by keeping track of opened divs.
      let openDivs = 1; // <div class="service-grid"> is already open
      let index = 0;
      let p2 = parts[1];
      
      while (openDivs > 0 && index < p2.length) {
        let nextOpen = p2.indexOf('<div', index);
        let nextClose = p2.indexOf('</div', index);
        
        if (nextClose === -1) break; // Should not happen in valid HTML
        
        if (nextOpen !== -1 && nextOpen < nextClose) {
          openDivs++;
          index = nextOpen + 4;
        } else {
          openDivs--;
          index = nextClose + 6; // length of </div>
        }
      }
      
      if (openDivs === 0) {
        // We found the closing div. Let's insert the button right after it.
        const before = p2.substring(0, index);
        const after = p2.substring(index);
        parts[1] = before + '\n      <div class="load-more-container" style="text-align: center; margin-top: 40px; margin-bottom: 40px;"><button class="btn btn--outline load-more-btn">Vezi mai multe poze</button></div>' + after;
        content = parts.join('class="service-grid"');
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
