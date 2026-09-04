const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  guestName: { type: String, required: true },
  location: { type: String, required: true },
  quote: { type: String, required: true },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
