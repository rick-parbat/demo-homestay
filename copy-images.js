const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\iamri\\.gemini\\antigravity-ide\\brain\\57bca724-e607-41c7-a771-6016a0d04f78';
const destDir = path.join(__dirname, 'server', 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const images = [
  { src: 'hero_image_1788480572698.jpg', dest: 'hero.jpg' },
  { src: 'room_deodar_suite_1788480585035.jpg', dest: 'room-deodar-suite.jpg' },
  { src: 'room_pine_cottage_1788480596456.jpg', dest: 'room-pine-cottage.jpg' },
  { src: 'room_slate_1788480626653.jpg', dest: 'room-slate.jpg' },
  { src: 'host_photo_1788480640823.jpg', dest: 'host.jpg' },
  { src: 'highlight_deck_1788480657393.jpg', dest: 'highlight-deck.jpg' },
  { src: 'highlight_bonfire_1788480686492.jpg', dest: 'highlight-bonfire.jpg' },
  { src: 'highlight_trail_1788480699864.jpg', dest: 'highlight-trail.jpg' },
  { src: 'gallery_1_1788481131451.jpg', dest: 'gallery-1.jpg' },
  { src: 'gallery_2_1788481144972.jpg', dest: 'gallery-2.jpg' },
  { src: 'gallery_3_1788481156801.jpg', dest: 'gallery-3.jpg' },
  { src: 'gallery_4_1788481236080.jpg', dest: 'gallery-4.jpg' },
  { src: 'gallery_3_1788481156801.jpg', dest: 'gallery-5.jpg' },
  { src: 'gallery_6_1788481250199.jpg', dest: 'gallery-6.jpg' }
];

images.forEach(img => {
  const srcPath = path.join(brainDir, img.src);
  const destPath = path.join(destDir, img.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${img.dest}`);
  } else {
    console.error(`Source not found: ${srcPath}`);
  }
});
