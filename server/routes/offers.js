const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');

// Get active offers
router.get('/', async (req, res) => {
  try {
    const offers = await Offer.find({ active: true }).sort({ createdAt: -1 });
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create offer (admin)
router.post('/', async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const saved = await offer.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update offer (admin)
router.put('/:id', async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!offer) return res.status(404).json({ message: 'Offer not found' });
    res.json(offer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
