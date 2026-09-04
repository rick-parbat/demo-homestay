const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  maxGuests: { type: Number, required: true, default: 2 },
  images: [{ type: String }],
  amenities: [{ type: String }],
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
