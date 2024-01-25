// carRouter.js

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Mendapatkan semua mobil
router.get('/', carController.getAllCars);

// Mendapatkan mobil berdasarkan ID
router.get('/:id', carController.getCarById);

// Membuat mobil baru
router.post('/', carController.createCar);

// Mengupdate mobil berdasarkan ID
router.put('/:id', carController.updateCar);

// Menghapus mobil berdasarkan ID
router.delete('/:id', carController.deleteCar);

module.exports = router;
