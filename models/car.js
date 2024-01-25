// Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  tahun: {
    type: Number,
    required: true,
  },
  hargasewa: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
