const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Count occurrences of load-more-container
  const count = (content.match(/class="load-more-container"/g) || []).length;
  
  if (count > 1) {
    // There are duplicates. Remove all but the last one (or just remove all and add one).
    const regex = /<div class="load-more-container"[\s\S]*?<\/button><\/div>\s*/g;
    
    // First, remove all of them
    content = content.replace(regex, '');
    
    // Then re-add it right after the closing </div> of service-grid
    const gridEndRegex = /(<\/div>\s*)(<\/section>)/;
    
    // Wait, the grid could end with </div>...
    // The easiest way is to split on class="service-grid", find its end, and append.
    const parts = content.split('class="service-grid"');
    if (parts.length === 2) {
      let openDivs = 1; 
      let index = 0;
      let p2 = parts[1];
      
      while (openDivs > 0 && index < p2.length) {
        let nextOpen = p2.indexOf('<div', index);
        let nextClose = p2.indexOf('</div', index);
        
        if (nextClose === -1) break;
        
        if (nextOpen !== -1 && nextOpen < nextClose) {
          openDivs++;
          index = nextOpen + 4;
        } else {
          openDivs--;
          index = nextClose + 6;
        }
      }
      
      if (openDivs === 0) {
        const before = p2.substring(0, index);
        const after = p2.substring(index);
        parts[1] = before + '\n      <div class="load-more-container" style="text-align: center; margin-top: 40px; margin-bottom: 40px;"><button class="btn btn--outline load-more-btn">Vezi mai multe poze</button></div>' + after;
        content = parts.join('class="service-grid"');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed duplicates in ${file}`);
      }
    }
  }
});
