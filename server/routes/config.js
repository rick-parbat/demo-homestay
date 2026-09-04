const express = require('express');
const router = express.Router();
const SiteConfig = require('../models/SiteConfig');

// Get site config
router.get('/', async (req, res) => {
  try {
    let config = await SiteConfig.findOne();
    if (!config) {
      config = await SiteConfig.create({});
    }
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update site config (admin)
router.put('/', async (req, res) => {
  try {
    let config = await SiteConfig.findOne();
    if (!config) {
      config = new SiteConfig(req.body);
    } else {
      Object.assign(config, req.body);
    }
    const saved = await config.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
