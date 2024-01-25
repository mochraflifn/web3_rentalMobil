// customerController.js

const Customer = require('../models/customer');

// Contoh controller untuk mendapatkan semua pelanggan
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Contoh controller untuk membuat pelanggan baru
const createCustomer = async (req, res) => {
  const { name, alamat, telp } = req.body;

  try {
    const newCustomer = new Customer({ name, alamat, telp });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Contoh controller untuk mengedit pelanggan berdasarkan ID
const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const { name, alamat, telp } = req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { name, alamat, telp },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Pelanggan tidak ditemukan' });
    }

    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCustomers, createCustomer, updateCustomer };
