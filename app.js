// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const carRouter = require('./routers/carRouter');
const customerRouter = require('./routers/customerRouter');
const rentalRouter = require('./routers/rentalRouter');
const returnRouter = require('./routers/returnRouter'); // Tambahkan router pengembalian

const app = express();
const PORT = 3000;

// Menggunakan body-parser
app.use(bodyParser.json());

// Menghubungkan ke MongoDB (pastikan MongoDB sudah berjalan)
mongoose.connect('mongodb://127.0.0.1:27017/rentalMobil', { useNewUrlParser: true, useUnifiedTopology: true });

// Menggunakan router untuk mobil, pelanggan, penyewaan, dan pengembalian
app.use('/cars', carRouter);
app.use('/customers', customerRouter);
app.use('/rentals', rentalRouter);
app.use('/returns', returnRouter);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
