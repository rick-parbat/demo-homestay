import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Resize and encode only; text removal is performed separately with imagegen.
const root = fileURLToPath(new URL('../', import.meta.url));
const input = path.join(root, 'assets/retreat-originals');
const output = path.join(root, 'public/retreat');
await mkdir(output, { recursive: true });
for (const file of await readdir(input)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const source = path.join(input, file);
  for (const width of [640, 1280, 1920]) {
    const result = await sharp(source).rotate().resize({ width }).webp({ quality: 83, effort: 5 }).toFile(path.join(output, `${name}-${width}.webp`));
    console.log(`${name}-${width}.webp: ${Math.round(result.size / 1024)} KB`);
  }
}
