const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews (or featured only)
router.get('/', async (req, res) => {
  try {
    const filter = req.query.featured === 'true' ? { featured: true } : {};
    const reviews = await Review.find(filter).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create review (admin)
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
