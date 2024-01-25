// customerRouter.js

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Mendapatkan semua pelanggan
router.get('/', customerController.getAllCustomers);

// Membuat pelanggan baru
router.post('/', customerController.createCustomer);

// Mengedit pelanggan berdasarkan ID
router.put('/:id', customerController.updateCustomer);

module.exports = router;