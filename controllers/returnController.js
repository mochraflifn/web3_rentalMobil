// returnController.js

const Return = require('../models/return');
const Rental = require('../models/rental');
const Car = require('../models/car');

// Contoh controller untuk mengembalikan mobil
const returnCar = async (req, res) => {
  const { rentalId, condition } = req.body;

  try {
    const rental = await Rental.findById(rentalId);
    if (!rental) {
      return res.status(404).json({ message: 'Penyewaan tidak ditemukan' });
    }

    // Menambah stok mobil
    const car = await Car.findById(rental.car);
    if (car) {
      car.stock++;
      await car.save();
    }

    // Melakukan pengembalian mobil
    const returnDate = new Date();
    const newReturn = new Return({
      rental: rentalId,
      returnDate,
      condition,
      // Informasi lainnya sesuai kebutuhan
    });

    await newReturn.save();

    // Mengupdate status penyewaan (misalnya, menambahkan tanggal pengembalian, mengubah status, dll.)
    rental.returnDate = returnDate;
    await rental.save();

    res.json({ message: 'Mobil berhasil dikembalikan' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Contoh controller untuk mendapatkan semua data pengembalian mobil
const getAllReturn = async (req, res) => {
    try {
      const returns = await Return.find();
      res.json(returns);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { returnCar, getAllReturn };
