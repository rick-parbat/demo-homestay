import { posts } from './blogPosts.js';
export const origin = 'https://www.divineviewretreat.in';
export const pages = [
  { path: '/', title: 'Divine View Retreat | Homestay in Ramdhura, Burmaik, Kalimpong', description: 'Plan your mountain escape at Divine View Retreat in Ramdhura, Burmaik, Kalimpong. Explore rooms, Bengali meals and local trips. Bookings open; stays after completion.' },
  { path: '/blog/', title: 'Ramdhura & Kalimpong Travel Guides | Divine View Retreat', description: 'Read the Hill Journal: practical guides to choosing a homestay in Ramdhura and Burmaik, planning a Kalimpong break and arranging your arrival.' },
  ...posts.map(post => ({ path: `/blog/${post.slug}/`, title: `${post.title} | Divine View Retreat`, description: post.description, post })),
];
export function structuredData(page) {
  const business = { '@type': 'LodgingBusiness', '@id': `${origin}/#business`, name: 'Divine View Retreat', url: `${origin}/`, logo: `${origin}/retreat/logo.webp`, image: `${origin}/retreat/logo.webp`, description: pages[0].description, telephone: '+917001268181', email: 'divineview15@gmail.com', address: { '@type': 'PostalAddress', streetAddress: 'Ramdhura, Burmaik (Daragaon)', addressLocality: 'Kalimpong', addressRegion: 'West Bengal', postalCode: '734315', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 27.1336667, longitude: 88.5661389 }, hasMap: 'https://www.google.com/maps?q=27.1336667,88.5661389' };
  const graph = [business, { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Divine View Retreat', url: `${origin}/`, publisher: { '@id': business['@id'] } }];
  if (page.post) graph.push({ '@type': 'BlogPosting', headline: page.post.title, description: page.description, image: `${origin}/retreat/${page.post.image}-1280.webp`, datePublished: `${page.post.date}T09:00:00+05:30`, dateModified: `${page.post.date}T09:00:00+05:30`, author: { '@type': 'Organization', name: 'Divine View Retreat', url: `${origin}/#retreat` }, publisher: { '@id': business['@id'] }, mainEntityOfPage: `${origin}${page.path}` });
  if (page.path !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` }, { '@type': 'ListItem', position: 2, name: 'Hill Journal', item: `${origin}/blog/` }, ...(page.post ? [{ '@type': 'ListItem', position: 3, name: page.post.title, item: `${origin}${page.path}` }] : [])] });
  return { '@context': 'https://schema.org', '@graph': graph };
}
