const fs = require('fs');

let html = fs.readFileSync('backup/index.html', 'utf8');

const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}

let body = bodyMatch[1];
const scriptMatch = body.match(/<script>([\s\S]*?)<\/script>/);
const scriptContent = scriptMatch ? scriptMatch[1] : '';

body = body.replace(/<script>[\s\S]*?<\/script>/g, '');

let jsx = body
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/stroke-width/g, 'strokeWidth')
  .replace(/stroke-linecap/g, 'strokeLinecap')
  .replace(/stroke-linejoin/g, 'strokeLinejoin')
  .replace(/<img(.*?[^\/])>/g, '<img$1 />')
  .replace(/<rect(.*?[^\/])>/g, '<rect$1 />')
  .replace(/<polygon(.*?[^\/])>/g, '<polygon$1 />')
  .replace(/<circle(.*?[^\/])>/g, '<circle$1 />')
  .replace(/<path(.*?[^\/])>/g, '<path$1 />')
  .replace(/<polyline(.*?[^\/])>/g, '<polyline$1 />')
  .replace(/<line (.*?[^\/])>/g, '<line $1 />')
  .replace(/<\/polyline>/g, '')
  .replace(/<\/circle>/g, '')
  .replace(/<\/line>/g, '')
  .replace(/<feGaussianBlur(.*?[^\/])>/g, '<feGaussianBlur$1 />')
  .replace(/<feMergeNode(.*?[^\/])>/g, '<feMergeNode$1 />')
  .replace(/<animateMotion(.*?[^\/])>/g, '<animateMotion$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/style="([^"]*)"/g, (match, p1) => {
    let styleObj = {};
    p1.split(';').forEach(s => {
      let parts = s.split(':');
      if (parts.length === 2 && parts[0].trim()) {
        let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = parts[1].trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

jsx = jsx.replace(/stop-color/g, 'stopColor')
         .replace(/stop-opacity/g, 'stopOpacity');

jsx = jsx.replace(/"assets\//g, '"/assets/');

// Escape stray comments that aren't valid in JSX body
jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');

const output = `
'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    ${scriptContent}
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', output);
console.log("Converted properly.");
