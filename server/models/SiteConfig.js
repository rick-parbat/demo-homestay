const mongoose = require('mongoose');

const siteConfigSchema = new mongoose.Schema({
  heroHeadline: { type: String, default: 'Where the pines meet the clouds' },
  heroSubhead: { type: String, default: 'A quiet corner in the Shimla hills, run by a family that loves these mountains as much as you will.' },
  hostName: { type: String, default: 'Vikram' },
  hostPhoto: { type: String, default: '/images/host.jpg' },
  hostWelcome: { type: String, default: '' },
  contactPhone: { type: String, default: '+91 98765 43210' },
  contactWhatsApp: { type: String, default: '+919876543210' },
  contactEmail: { type: String, default: 'stay@deodarnest.in' },
  address: { type: String, default: 'Deodar Nest, Near Kufri Road, Shimla, Himachal Pradesh 171012' },
  distances: [{
    place: String,
    distance: String,
  }],
  socialLinks: {
    instagram: { type: String, default: '' },
    facebook: { type: String, default: '' },
  },
  highlights: [{
    heading: String,
    description: String,
    image: String,
  }],
  amenities: [{
    name: String,
    icon: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model('SiteConfig', siteConfigSchema);
