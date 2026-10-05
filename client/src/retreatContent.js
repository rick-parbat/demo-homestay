// The clean masters and source/license records live in client/assets.
// Swapping a master preserves the layout; regenerate responsive assets with
// node scripts/prepare-retreat-images.mjs from the client directory.
export function responsiveImage(name) {
  return {
    src: `/retreat/${name}-1280.webp`,
    srcSet: [640, 1280, 1920].map(width => `/retreat/${name}-${width}.webp ${width}w`).join(', '),
  };
}
export const imagery = {
  mountain: { ...responsiveImage('mountain'), alt: 'Clouds over layered mountain slopes and a winding river', caption: 'Clouds, hills and open skies · Retouched landscape imagery' },
  room: { ...responsiveImage('room'), alt: 'Room concept with warm wood details and a wide mountain-facing window', caption: 'Rest well · Room concept' },
  balcony: { ...responsiveImage('balcony'), alt: 'Balcony concept with warm evening light and a mountain outlook', caption: 'Step outside · Balcony concept' },
  food: { ...responsiveImage('food'), alt: 'A generous spread of curries, rice and flatbreads', caption: 'The warmth of a home kitchen · Food inspiration' },
  destination: { ...responsiveImage('destination'), alt: 'River bends framed by forested mountain slopes', caption: 'Away from the usual · Retouched landscape imagery' },
};
