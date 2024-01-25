// Rental.js

const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // Menyimpan lama sewa dalam jumlah hari
    required: true,
  },
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
