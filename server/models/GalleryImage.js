const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, required: true },
  aspectRatio: { type: String, enum: ['landscape', 'portrait', 'square'], default: 'landscape' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('GalleryImage', galleryImageSchema);
