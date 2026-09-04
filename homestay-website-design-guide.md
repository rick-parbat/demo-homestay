# Premium Homestay Website — Design & Structure Guide

**Grounding assumption:** every reference you sent is a Shimla / Himachal hill-station property, so this guide is built around a mountain homestay — pine and deodar forests, stone and wood construction, colonial-era Shimla architecture nearby, a small number of rooms/cottages, and a host-led (not corporate-chain) feel. If your homestay is somewhere else, the structure holds; swap the imagery and place-names in the copy notes.

The single biggest thing that separates a homestay site from a hotel-chain site: **you have a host, not a brand desk.** Oberoi Cecil and Dusit sell a corporate promise. A homestay sells a person's hospitality. Lean into that everywhere — a host's welcome note, a real photo of the family/caretaker, "we'll pick you up from the bus stand" specificity — rather than copying five-star chain language wholesale.

---

## 1. Colour System

Most "premium hospitality" AI-generated sites converge on the same look: a warm cream background (`#F4F1EA`-ish) with a terracotta accent. It's become a cliché precisely because it's the safe default. Since your homestay is in the mountains, not the desert, there's a more specific palette sitting right there in the subject matter: pine/deodar forests, limestone and slate, mist, and warm cedar wood and brass fixtures indoors.

### Primary direction — "Deodar & Stone"

| Token | Hex | Use |
|---|---|---|
| **Stone** (base background) | `#E5E1D6` | Main page background — cool limewashed stone, not cream |
| **Deodar Ink** (primary text) | `#1F2A22` | Headlines, body copy — deep cedar-forest black-green, never pure black |
| **Deodar Green** (primary accent) | `#3C5240` | Primary buttons, links, active nav state, section dividers |
| **Cedar Copper** (secondary accent) | `#9C5A34` | Used sparingly — offer badges, hover states, small highlights |
| **Antique Brass** (detail accent) | `#A9863F` | Fine rules, icon strokes, borders — the "hardware" of the design |
| **Dusk** (contrast/dark) | `#171D18` | Hero overlay, footer, any dark section |

Supporting neutrals (derived, not separate brand colours):
- **Mist** `#F5F3EC` — card backgrounds, alternating section tint
- **Slate** `#6B6A5F` — captions, meta text, secondary copy

**Usage rule (roughly 60/30/10):** Stone/Mist carry ~60% of the page as background. Deodar Ink and Slate carry text. Deodar Green is the dominant accent (~30%) on interactive elements. Copper and Brass are the last ~10% — reserved for moments you want to feel special, not sprinkled everywhere. If everything is an accent, nothing is.

### Two alternate directions (pick one, don't blend all three)

**B — "Mountain Dusk"** *(moodier, more editorial — closer to how Dusit styles itself)*
`#1B1F1B` near-black pine base · `#EDE7DA` warm ivory text · `#C99A4B` alpine amber accent.
Best used as a *dark hero* that resolves into the Stone palette below it, rather than a whole dark site — dark sites can undercut the "warm homestay" feeling.

**C — "Whitewashed Heritage"** *(lighter, colonial-Shimla — closer to how Oberoi Cecil reads)*
`#F3F1EA` whitewashed wall · `#2B2620` ink · `#37503E` shutter green · `#8B3A2B` tin-roof red (very sparing — one accent only, e.g. a single "Offers" tag colour).
This one nods directly at Shimla's actual architecture — white walls, green shutters, red/green tin roofs — so it reads as intentional rather than decorative.

Whichever you pick, avoid running the palette hot everywhere: reserve Copper/red for the *one* thing per page that should catch the eye (a live offer, a "book now" moment) — not headings, not icons, not every button.

---

## 2. Typography

- **Display / headings:** **Fraunces** (soft optical size, weights 400–600). It's a warm, slightly rustic serif with real character — avoids the ultra-common "luxury hotel" Playfair Display look while still reading as premium.
- **Body / UI:** **General Sans** (Fontshare, free) with **Inter** as a safe fallback. Clean humanist grotesk, good at small sizes for nav, buttons, and body copy.
- Use sentence case throughout — skip tracked-out ALL-CAPS "eyebrow" labels above every heading; it's one of the most common tells of a templated site.

**Type scale (desktop → mobile):**

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero H1 | 60px / 1.05 | 36px / 1.1 | Fraunces 500 |
| Section H2 | 40px / 1.15 | 28px / 1.2 | Fraunces 500 |
| Card/H3 | 24px / 1.3 | 20px / 1.3 | Fraunces 500 |
| Body | 17px / 1.6 | 16px / 1.6 | General Sans 400 |
| Meta/caption | 14px / 1.5 | 13px / 1.5 | General Sans 400, Slate |
| Nav/buttons | 15px | 15px | General Sans 500 |

Keep body text columns to roughly 65–75 characters per line (max-width ~620–680px) — wide unbroken paragraphs are the fastest way to make a premium page feel cheap.

---

## 3. Desktop Structure

### 3.1 Navigation
Transparent over the hero, solidifying to Stone background on scroll.

```
┌──────────────────────────────────────────────────────────────────┐
│  LOGO        Stay   Experiences   Gallery   Location   Offers     │
│                                                     [ Book Now ]   │
└──────────────────────────────────────────────────────────────────┘
```
5–6 nav items max. "Book Now" is the one button styled solid Deodar Green — every other nav item is plain text.

### 3.2 Hero
Full-bleed image or slow (20s+), barely-perceptible zoom video of the property with mountains behind it. One headline, one short subhead, one CTA. A floating booking-check card overlaps the bottom edge of the hero, bridging into the next section.

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│                    [ full-bleed hero photo ]                      │
│                                                                    │
│              A headline specific to this place                   │
│                   One-line supporting sentence                    │
│                                                                    │
│      ┌────────────────────────────────────────────────────┐      │
│      │ Check-in    Check-out    Guests    [Check Availability]│   │
│      └────────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────────────┘
```

### 3.3 The Host's Welcome (this is your differentiator)
Two-column: a real photo of the host/family/caretaker on one side, a short first-person welcome note on the other. This is the section a hotel chain can't copy — use it.

```
┌───────────────────────┬────────────────────────────────────────┐
│                        │  "We built this place because..."      │
│    [ host photo ]      │  Short, warm, first-person paragraph.  │
│                        │  Sign-off: host's first name.          │
└───────────────────────┴────────────────────────────────────────┘
```

### 3.4 Stay — Rooms/Cottages
3 cards per row. Photography-led, minimal card chrome (a thin brass rule instead of a drop shadow), 2–4px radius rather than heavily rounded corners.

```
┌───────────┐  ┌───────────┐  ┌───────────┐
│  photo    │  │  photo    │  │  photo    │
│ Room name │  │ Room name │  │ Room name │
│ short line│  │ short line│  │ short line│
│ From ₹X   │  │ From ₹X   │  │ From ₹X   │
│ [ View ]  │  │ [ View ]  │  │ [ View ]  │
└───────────┘  └───────────┘  └───────────┘
```

### 3.5 Highlights strip (alternating)
2–3 full-width blocks, image and text alternating sides each time — mornings on the deck, the bonfire, a nearby trail. This is the pattern the bigger hotels (Dusit, Oberoi) use to sell a feeling rather than a spec sheet.

```
┌───────────────────────┬────────────────────────────────────────┐
│    [ image ]           │  Short evocative heading                │
│                        │  1–2 sentences, no more.                │
└───────────────────────┴────────────────────────────────────────┘
┌────────────────────────────────────────────────┬───────────────┐
│  Short evocative heading                         │   [ image ]   │
│  1–2 sentences, no more.                         │               │
└────────────────────────────────────────────────┴───────────────┘
```

### 3.6 Amenities
Simple icon grid, 4–6 columns, Brass-stroke icons, no cards/boxes around each one — let the whitespace do the separating.

### 3.7 Gallery
Masonry or a horizontal-scroll strip of real photography — not stock. Mixed aspect ratios read as more authentic than a uniform grid.

### 3.8 Guest voices
2–3 short quotes, centred, generous whitespace. No 5-star icon rows (they read as OTA, not premium) — just the words and a first name + how far they travelled.

### 3.9 Location & getting there
Embedded map + a short distance list (nearest bus stand, railway station, airport, one or two landmarks) — this exact pattern comes straight from how Oberoi Cecil and WoodVista both handle it, and it's genuinely useful for a hill-station property where GPS pins can be unreliable.

### 3.10 Offers (if applicable)
2–3 cards, used sparingly with the Copper accent — this is the one place that colour should show up clearly.

### 3.11 Final CTA band
Full-width, Dusk or Deodar Green background, ivory text: one line + Book Now + a WhatsApp/call option side by side (a WhatsApp link is standard on almost every one of your reference sites — worth having as a direct booking channel).

### 3.12 Footer
Logo · nav links repeated · address · phone/WhatsApp/email · social icons · policies. Keep it plain-text, not another dense mega-menu.

---

## 4. Mobile Structure

```
┌───────────────────────┐
│ ☰   LOGO      📞 / WA │  ← sticky top bar
├───────────────────────┤
│                        │
│     [ hero photo ]     │  ← 70–80vh, not full screen
│   Headline (2–3 lines) │
│   [ Check Availability]│
│                        │
├───────────────────────┤
│  Host photo (stacked)  │
│  Welcome note below    │
├───────────────────────┤
│  Stay — swipeable      │
│  card carousel  →      │
├───────────────────────┤
│  Highlight 1            │
│  image full-width,      │
│  text stacked below     │
├───────────────────────┤
│  Highlight 2 ...        │
├───────────────────────┤
│  Amenities — 2 columns  │
├───────────────────────┤
│  Gallery — swipe strip  │
├───────────────────────┤
│  Guest voices — 1 at a  │
│  time, swipe            │
├───────────────────────┤
│  Location + map         │
├───────────────────────┤
│  Offers — stacked        │
├───────────────────────┤
│  CTA band                │
├───────────────────────┤
│  Footer — accordion       │
│  groups (tap to expand)   │
├───────────────────────┤
│  [ Call ]   [ Book Now ]  │  ← sticky bottom bar, always visible
└───────────────────────┘
```

**Mobile-specific rules:**
- Every section becomes a single column, full width, generously padded (24px side margins minimum).
- The booking widget from the hero collapses into a bottom-sheet you tap to expand, rather than sitting inline — inline date/guest pickers are the most common mobile friction point on hotel sites.
- A **sticky bottom bar** with Call + Book Now stays visible on scroll — nearly every serious hotel/resort site in your list does this on mobile, because it's where bookings actually convert.
- Room cards and gallery become horizontal swipe carousels instead of grids.
- Footer link groups collapse into accordions so the page doesn't end in a wall of links.

---

## 5. Spacing, Cards & Motion

- **Vertical rhythm:** 120–160px between major sections on desktop, 64–80px on mobile. Generous whitespace is one of the cheapest ways to signal "premium" — don't crowd sections together.
- **Cards:** avoid the identical-rounded-corner-plus-soft-shadow look on every card (the common "SaaS card" default). Use a thin 1px Brass or Slate rule instead of a shadow, and keep radius small (2–4px) or none.
- **Motion:** spend it in one place, not everywhere. A single slow zoom on the hero image/video is enough. Skip fade-and-slide-up animations triggered on every section as you scroll — it's a strong tell of a generated/templated site, not a designed one.
- **Buttons:** one solid style (Deodar Green fill, Mist text) for primary actions, one outline style for secondary actions. Skip appending "→" to every link and button label — plain, direct label text reads as more considered.

---

## 6. What to deliberately avoid

Pulled from comparing your reference list — these are the patterns that make hospitality sites look interchangeable rather than distinct to one property:

- The cream-background-plus-terracotta-accent combo as a default (see §1 — it's the single most common "AI hotel site" tell right now).
- ALL-CAPS tracked-out eyebrow labels above every section heading.
- Star-rating icon rows next to guest quotes — reads as OTA listing, not a premium property's own site.
- Identical rounded cards with the same drop shadow used for rooms, amenities, offers, and blog posts alike — vary the treatment by content type.
- Numbered 01/02/03 markers on content that isn't actually a sequence (amenities, highlights) — reserve numbering for genuinely ordered things, like a "how to reach us" set of directions.

---

## 7. What we pulled from your references

- **Nav shape** (Stay / Dining / Wellness / Experiences / Gallery / Offers + a single standout Book button) — consistent across Oberoi Cecil and Dusit D2 Fagu; it's the industry-standard information architecture for a reason, and there's no benefit to reinventing it.
- **Floating booking widget over the hero** — used by both Oberoi and Dusit; keeps the primary action visible without a second scroll.
- **Alternating image/text "highlight" blocks** to sell an experience rather than a spec — Dusit's homepage leans on this heavily.
- **A distances/"getting there" list** near the location section — both Oberoi Cecil and WoodVista Cottages include this, and it's genuinely more useful in the hills than a bare map pin.
- **The host/personal-touch section is deliberately *not* from your references** — the big hotels can't offer it, and it's the clearest way your site won't read as "small Oberoi."

---

*Next steps if useful: I can turn this into an actual HTML/CSS starting point, or mock up the hero + nav as a visual first.*
