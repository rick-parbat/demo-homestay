# Divine View Retreat — pre-opening website

Run `npm install` and `npm run dev` in client. Build with `npm run build`.
The homepage is static React: it does not require the former demo database/server.
The former demo booking pages, prices, reviews and API content are no longer exposed by the app.

## Photography handoff

Five owner-supplied posters have been cleaned with the image editor to remove the
large promotional lettering. The room and balcony retain concept labels; the food
image is inspiration. Only BALCONY 1.jpg was selected, avoiding the duplicate.

The hero uses licensed Kanchenjunga sunrise photography. Three additional licensed
photos show the Teesta, Rishop and Kalimpong. Source links and license records are in
`assets/IMAGE_SOURCES.md`; these licenses do not require visible photo credits.

Clean masters are preserved in `assets/retreat-originals/`. To regenerate the 640,
1280 and 1920px WebP assets, run `node scripts/prepare-retreat-images.mjs` from client.
`src/retreatContent.js` defines responsive image paths and captions. Only the hero
is preloaded; other photos lazy-load. Replace concept images with actual property
photos when available and update the captions and FAQ accordingly.
## Content safeguards

Contact details were confirmed by the owner; the updated WhatsApp number supersedes the older published number:
phone +91 7001268181, WhatsApp +91 9593487208, divineview15@gmail.com.
All enquiry buttons open the same prefilled WhatsApp message; visitors send it themselves.
Bookings are now open, as confirmed by the owner; stays begin after completion. No stay-opening date, rates, ratings or live availability are asserted. The owner-provided 3.5-hour NJP/Siliguri journey and 2–3 minute waterfall walk are labelled as estimates, subject to conditions.
Eight perks and three activity ideas cover the owner’s complete offering list. Garden spaces, bonfire/BBQ evenings and pickup assistance are explicitly planned, with arrangements to be confirmed. No facilities are copied from the reference property as guarantees.
The map uses the owner-supplied pin at 27.1336667, 88.5661389 from https://maps.app.goo.gl/tAL5aGPGhumGusG37. Directions target these coordinates while the business listing is being added to Google Maps.

## Validation

Production build passes. Lint reports two pre-existing warnings in unused legacy
BookingWidget and SiteConfigContext files, with no errors.
Browser review: 1280px desktop, 390px mobile, 320px narrow screen; no horizontal
overflow, valid section anchors, stacked room blocks and working mobile menu links.
The initial redesign measured 4393px versus 7282px at 1280px. Subsequent owner-requested additions include nearby places, retreat perks, activities and a compact FAQ, so that initial length comparison no longer describes the current page.
Cleaned images and destination photography reviewed in the browser; all nine images load.

Production: https://demo-homestay-tawny.vercel.app/ — GitHub main automatically deploys through the Vercel demo-homestay project, with client as the root directory.

FAQ expansion was checked by pointer and keyboard; the new sections were checked at 390px and 1280px with no horizontal overflow or broken section links. Component inspiration: https://mairungmistypeaks.in/ — structure only; no photos, reviews or property-specific promises were reused.


Owner update: Bengali welcome line, Bengali meals, duplex cottages, garden, selfie corner, waterfall, pickups and chargeable bonfire/BBQ included. All 24 sightseeing options are represented: four featured destinations, 19 additional map links and a separate Sikkim Silk Route excursion note. The additional places were supplied by the owner, not independently route-verified.
