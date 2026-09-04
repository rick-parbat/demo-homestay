const express = require('express');
const router = express.Router();
const GalleryImage = require('../models/GalleryImage');

// Get all gallery images
router.get('/', async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ order: 1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add gallery image (admin)
router.post('/', async (req, res) => {
  try {
    const image = new GalleryImage(req.body);
    const saved = await image.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete gallery image (admin)
router.delete('/:id', async (req, res) => {
  try {
    await GalleryImage.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
