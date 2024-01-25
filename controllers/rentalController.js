// rentalController.js

const Rental = require('../models/rental');
const Car = require('../models/car');

// Contoh controller untuk membuat penyewaan baru
const createRental = async (req, res) => {
  const { carId, customerId, startDate, endDate } = req.body;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    }

    // Mengurangi stok mobil saat mobil disewa
    car.stock--;
    await car.save();

    // Menghitung lama sewa dalam jumlah hari
    const duration = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));

    // Menghitung total biaya penyewaan
    const totalCost = car.hargasewa * duration;

    const newRental = new Rental({
      car: carId,
      customer: customerId,
      startDate,
      endDate,
      duration,
      totalCost,
    });

    const savedRental = await newRental.save();

    res.status(201).json({ rental: savedRental, totalCost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find().populate({
      path: 'car customer',
      select: '-__v', // Menyembunyikan field __v yang mungkin ada pada model
    });

    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRental, getAllRentals };
