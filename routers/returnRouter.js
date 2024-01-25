// returnRouter.js

const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

// Mengembalikan mobil
router.post('/', returnController.returnCar);

// Mendapatkan semua data pengembalian mobil
router.get('/', returnController.getAllReturn);

module.exports = router;
