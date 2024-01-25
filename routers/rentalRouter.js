// rentalRouter.js

const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

// Membuat penyewaan baru
router.post('/', rentalController.createRental);

// Mendapatkan semua penyewaan
router.get('/', rentalController.getAllRentals);

module.exports = router;
