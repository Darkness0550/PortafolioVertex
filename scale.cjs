const fs = require('fs');
const path = require('path');
function scaleDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) scaleDir(p);
    else if (p.endsWith('.css')) {
      let c = fs.readFileSync(p, 'utf8');
      
      c = c.replace(/font-size:\s*(\d+)px/g, (match, p1) => {
        const newSize = Math.round(parseInt(p1) * 1.15);
        return `font-size: ${newSize}px`;
      });
      
      c = c.replace(/font-size:\s*clamp\((\d+)px,\s*([\d\.]+)vw,\s*(\d+)px\)/g, (match, min, vw, max) => {
        const newMin = Math.round(parseInt(min) * 1.15);
        const newMax = Math.round(parseInt(max) * 1.15);
        return `font-size: clamp(${newMin}px, ${vw}vw, ${newMax}px)`;
      });

      fs.writeFileSync(p, c);
    }
  });
}
scaleDir('src');
console.log('done scaling css fonts');
