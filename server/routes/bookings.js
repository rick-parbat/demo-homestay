const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Room = require('../models/Room');

// Check availability and create booking
router.post('/', async (req, res) => {
  try {
    const { room, guestName, email, phone, checkIn, checkOut, guests } = req.body;

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({ message: 'Check-out must be after check-in' });
    }

    // Check for overlapping bookings
    const overlapping = await Booking.findOne({
      room,
      status: { $ne: 'cancelled' },
      $or: [
        { checkIn: { $lt: checkOutDate }, checkOut: { $gt: checkInDate } },
      ],
    });

    if (overlapping) {
      return res.status(409).json({ message: 'Room is not available for the selected dates' });
    }

    // Calculate total price
    const roomDoc = await Room.findById(room);
    if (!roomDoc) return res.status(404).json({ message: 'Room not found' });

    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * roomDoc.pricePerNight;

    const booking = new Booking({
      room, guestName, email, phone,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      totalPrice,
    });

    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings (admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('room', 'name')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Check availability (public)
router.post('/check', async (req, res) => {
  try {
    const { checkIn, checkOut, guests } = req.body;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    // Find rooms that have no overlapping bookings and can accommodate guests
    const bookedRoomIds = await Booking.find({
      status: { $ne: 'cancelled' },
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    }).distinct('room');

    const availableRooms = await Room.find({
      _id: { $nin: bookedRoomIds },
      maxGuests: { $gte: guests || 1 },
    });

    res.json(availableRooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
