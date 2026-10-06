import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';
import { origin, pages, structuredData } from '../src/seo.js';
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const page of [...pages, { path: '/404/', title: 'Page not found | Divine View Retreat', description: 'This page could not be found.', notFound: true }]) {
  const url = origin + page.path;
  const picture = `${origin}/retreat/${page.post ? page.post.image : 'hero-kanchenjunga'}-1280.webp`;
  const meta = `<link rel="canonical" href="${url}"/><meta name="robots" content="${page.notFound ? 'noindex' : 'index,follow,max-image-preview:large'}"/>
<meta property="og:site_name" content="Divine View Retreat"/><meta property="og:type" content="${page.post ? 'article' : 'website'}"/><meta property="og:title" content="${escape(page.title)}"/><meta property="og:description" content="${escape(page.description)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${picture}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(page.title)}"/><meta name="twitter:description" content="${escape(page.description)}"/><meta name="twitter:image" content="${picture}"/>
${page.notFound ? '' : `<script type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll('<', '\\u003c')}</script>`}`;
  let html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`).replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(page.description)}"/>`).replace('</head>', `${meta}</head>`).replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  if (page.path !== '/') html = html.replace(/<link rel="preload" as="image"[^>]*>/, '');
  const directory = `dist${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}index.html`, html);
  if (page.notFound) await writeFile('dist/404.html', html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `<url><loc>${origin}${page.path}</loc>${page.post ? `<lastmod>${page.post.date}</lastmod>` : ''}</url>`).join('')}</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Prerendered ${pages.length} public pages, a 404 page, sitemap.xml and robots.txt.`);
