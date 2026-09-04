const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  validUntil: { type: Date },
  badgeText: { type: String },
  ctaLink: { type: String, default: '#book' },
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);
