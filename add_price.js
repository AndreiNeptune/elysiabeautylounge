const fs = require('fs');
const content = fs.readFileSync('coafor-extensii.html', 'utf8');
const newContent = content.replace(
  '<tr><td>Spalat & Coafat Extensii</td><td>210 lei</td><td>1h 20min</td></tr>',
  '<tr><td>Spalat & Coafat Extensii</td><td>210 lei</td><td>1h 20min</td></tr>\n                <tr><td>Coafat special</td><td>300-500 lei</td><td></td></tr>'
);
if (content !== newContent) {
  fs.writeFileSync('coafor-extensii.html', newContent, 'utf8');
  console.log('Update successful');
} else {
  console.log('String not found');
}
