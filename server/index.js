require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const fs = require('fs');

const app = express();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// API Routes
app.use('/api/rooms', require('./routes/rooms'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/gallery', require('./routes/gallery'));
app.use('/api/offers', require('./routes/offers'));
app.use('/api/config', require('./routes/config'));
app.use('/api/upload', require('./routes/upload'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
  // Auto-seed if database is empty (e.g. in-memory mode or fresh install)
  const Room = require('./models/Room');
  const count = await Room.countDocuments();
  if (count === 0) {
    console.log('Database is empty — auto-seeding...');
    // Import and run seed inline
    const SiteConfig = require('./models/SiteConfig');
    const Review = require('./models/Review');
    const GalleryImage = require('./models/GalleryImage');
    const Offer = require('./models/Offer');

    await Room.insertMany([
      {
        name: 'The Deodar Suite',
        tagline: 'Wake up to cedar-framed mountain views',
        description: 'Our most spacious room sits at the top of the house, with floor-to-ceiling windows opening onto the deodar canopy and the snow line beyond. A writing desk, a deep window seat, and a wood-panelled bathroom with a copper-finished rain shower. Mornings here start with birdsong and a thermos of Kangra tea left at your door.',
        pricePerNight: 4500, maxGuests: 3,
        images: ['/images/room-deodar-suite.jpg'],
        amenities: ['Mountain view', 'King bed', 'Rain shower', 'Writing desk', 'Kangra tea service'],
        featured: true,
      },
      {
        name: 'The Pine Cottage',
        tagline: 'A private stone-and-timber retreat among the pines',
        description: 'A detached cottage tucked behind the main house, built from local stone with a pitched slate roof. Inside: a four-poster bed, a small sitting area with a bukhari wood-stove, and a private deck with two chairs and nothing but forest ahead. Best for couples or solo travellers who want quiet.',
        pricePerNight: 5500, maxGuests: 2,
        images: ['/images/room-pine-cottage.jpg'],
        amenities: ['Private deck', 'Wood stove', 'Four-poster bed', 'Forest view', 'Room service'],
        featured: true,
      },
      {
        name: 'The Slate Room',
        tagline: 'Warm wood and valley light',
        description: 'A cosy room on the ground floor with slate flooring, whitewashed walls, and a large arched window facing the valley. Simple and warm — a good brass reading lamp, a firm bed with handloom throws, and a bathroom finished in local stone. Steps away from the garden and the firepit.',
        pricePerNight: 3200, maxGuests: 2,
        images: ['/images/room-slate.jpg'],
        amenities: ['Valley view', 'Queen bed', 'Garden access', 'Reading lamp', 'Handloom throws'],
        featured: true,
      },
    ]);

    await Review.insertMany([
      { guestName: 'Priya', location: 'Travelled from Delhi', quote: 'We came for a weekend and nearly cancelled a Monday meeting to stay longer. The host left us a hand-drawn map of a morning walk through the deodar grove — we saw three kinds of woodpeckers before breakfast.', featured: true },
      { guestName: 'Arjun and Meera', location: 'Travelled from Bangalore', quote: 'No reception desk, no check-in form — just Vikram at the gate with chai and a genuine smile. The cottage fireplace and the silence are the two things we keep talking about months later.', featured: true },
      { guestName: 'Sarah', location: 'Travelled from London', quote: "I've stayed at heritage hotels across India, but this was the first place that felt like someone's home rather than a set. The food alone — pahari dal, fresh roti off the tawa — was worth the drive from Chandigarh.", featured: true },
    ]);

    await GalleryImage.insertMany([
      { url: '/images/gallery-1.jpg', alt: 'Morning mist over the valley', aspectRatio: 'landscape', order: 1 },
      { url: '/images/gallery-2.jpg', alt: 'Stone pathway through the garden', aspectRatio: 'portrait', order: 2 },
      { url: '/images/gallery-3.jpg', alt: 'Evening bonfire under the stars', aspectRatio: 'landscape', order: 3 },
      { url: '/images/gallery-4.jpg', alt: 'Deodar trees catching golden light', aspectRatio: 'square', order: 4 },
      { url: '/images/gallery-5.jpg', alt: 'Fresh mountain breakfast on the deck', aspectRatio: 'landscape', order: 5 },
      { url: '/images/gallery-6.jpg', alt: 'The reading corner by the window', aspectRatio: 'portrait', order: 6 },
    ]);

    await Offer.insertMany([
      { title: 'Monsoon retreat', description: 'Three nights for the price of two through July and August. The forests are at their greenest, the waterfalls are running, and the crowds are elsewhere.', validUntil: new Date('2027-08-31'), badgeText: 'Seasonal', active: true },
      { title: 'Extended stay', description: 'Book seven nights or more and receive a complimentary guided trek to Jakhoo Temple and a packed picnic lunch from our kitchen.', validUntil: new Date('2027-12-31'), badgeText: 'Long stay', active: true },
      { title: 'Midweek quiet', description: 'Sunday through Thursday bookings come with fifteen percent off our standard rates. Same rooms, same mountains, fewer people on the trails.', validUntil: new Date('2027-12-31'), badgeText: '15% off', active: true },
    ]);

    await SiteConfig.create({
      heroHeadline: 'Where the pines meet the clouds',
      heroSubhead: 'A quiet corner in the Shimla hills, run by a family that loves these mountains as much as you will.',
      hostName: 'Vikram', hostPhoto: '/images/host.jpg',
      hostWelcome: "We built this place ten years ago because we kept coming back to this ridge and didn't want to leave. The house started as a two-room stone cottage — we added the deck, then the garden, then a couple more rooms when friends started asking if they could stay. It's still not a hotel, and we'd like to keep it that way. You'll eat what we eat, walk the trails we walk, and if you're lucky, catch the same sunset over the Dhauladhar range that made us stay in the first place.",
      contactPhone: '+91 98765 43210', contactWhatsApp: '+919876543210',
      contactEmail: 'stay@deodarnest.in',
      address: 'Deodar Nest, Near Kufri Road, Mashobra, Shimla, Himachal Pradesh 171012',
      distances: [
        { place: 'Shimla Bus Stand (ISBT)', distance: '14 km · 35 min drive' },
        { place: 'Shimla Railway Station', distance: '16 km · 40 min drive' },
        { place: 'Chandigarh Airport', distance: '130 km · 4 hr drive' },
        { place: 'Kufri', distance: '6 km · 15 min drive' },
        { place: 'Mall Road, Shimla', distance: '12 km · 30 min drive' },
      ],
      socialLinks: { instagram: 'https://instagram.com/deodarnest', facebook: 'https://facebook.com/deodarnest' },
      highlights: [
        { heading: 'Mornings on the deck', description: 'Pull a chair up to the railing with a cup of Kangra tea and watch the valley fill with light. On clear days the snow line is close enough to feel personal.', image: '/images/highlight-deck.jpg' },
        { heading: 'The bonfire after dark', description: 'No schedule, no programme — just a fire, some chairs, and whatever conversation happens. We keep a stack of Himachali blankets by the pit.', image: '/images/highlight-bonfire.jpg' },
        { heading: 'Trails from the doorstep', description: 'A thirty-minute walk through the deodar grove behind the house connects to the old Mashobra bridle path. No guide needed, just a decent pair of shoes.', image: '/images/highlight-trail.jpg' },
      ],
      amenities: [
        { name: 'Mountain views', icon: 'mountain' }, { name: 'Free Wi-Fi', icon: 'wifi' },
        { name: 'Fireplace', icon: 'fire' }, { name: 'Home-cooked meals', icon: 'utensils' },
        { name: 'Private parking', icon: 'car' }, { name: 'Garden', icon: 'flower' },
        { name: 'Library', icon: 'book' }, { name: 'Bonfire', icon: 'flame' },
      ],
    });

    console.log('Auto-seed complete!');
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
