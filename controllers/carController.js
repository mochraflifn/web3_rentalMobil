// carController.js

const Car = require('../models/car');

// Contoh controller untuk mendapatkan semua mobil
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Contoh controller untuk mendapatkan mobil berdasarkan ID
const getCarById = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Contoh controller untuk membuat mobil baru
const createCar = async (req, res) => {
  const { brand, model, tahun, hargasewa, stock } = req.body;

  try {
    const newCar = new Car({ brand, model, tahun, hargasewa, stock });
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Contoh controller untuk mengupdate mobil berdasarkan ID
const updateCar = async (req, res) => {
  const carId = req.params.id;
  const { brand, model, tahun, hargasewa, stock } = req.body;

  try {
    const updatedCar = await Car.findByIdAndUpdate(
      carId,
      { brand, model, tahun, hargasewa, stock },
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    }

    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Contoh controller untuk menghapus mobil
const deleteCar = async (req, res) => {
  const carId = req.params;

  try {
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    }

    res.json({ message: 'Mobil berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };
