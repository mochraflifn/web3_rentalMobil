// Return.js

const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  rental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rental',
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  // Informasi lainnya sesuai kebutuhan
});

const Return = mongoose.model('Return', returnSchema);

module.exports = Return;
