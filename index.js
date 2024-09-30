// server.mjs
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Mengizinkan CORS
app.use(express.json()); // Untuk parsing JSON

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Misalnya menggunakan Gmail
  auth: {
    user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS // Ganti dengan password email Anda
  },
});

// Route untuk mengirim email
app.post('/send-email', (req, res) => {
  const { email, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Ganti dengan email Anda
    to: email, // Ganti dengan email tujuan
    subject: subject || 'Default Subject',
    text: text || 'Default Text',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send(`Email sent: ${info.response}`);
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
