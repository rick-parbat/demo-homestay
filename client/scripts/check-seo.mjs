import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { pages, origin } from '../src/seo.js';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('../', import.meta.url)));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const page of pages) {
  const html = await readFile(`dist${page.path}index.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${page.path}: one main heading`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes(`href="${origin}${page.path}"`));
  assert(!html.includes('noindex'));
  assert(sitemap.includes(`<loc>${origin}${page.path}</loc>`));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert(schema['@graph'].some(node => node['@type'] === 'LodgingBusiness'));
  if (page.post) {
    assert(schema['@graph'].some(node => node['@type'] === 'BlogPosting'));
    assert(html.includes(page.post.sections[0].paragraphs[0]));
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = match[1];
    await access(`dist${path}${path.endsWith('/') ? 'index.html' : ''}`);
  }
}
assert((await readFile('dist/404.html', 'utf8')).includes('noindex'));
assert((await readFile('dist/robots.txt', 'utf8')).includes(`${origin}/sitemap.xml`));
console.log('SEO checks passed: HTML content, headings, canonical URLs, schema, internal links, sitemap and 404.');
