const express = require('express');
const router = express.Router();
const csvParser = require('csv-parser');
const fs = require('fs');
const axios = require('axios');
const History = require('../models/history');

// Route untuk upload dan proses CSV
router.post('/upload', (req, res) => {
  // Implementasikan logika untuk menerima file CSV dan parsing
});

// Route untuk mengirim pesan
router.post('/send', async (req, res) => {
  const { deviceId, number, message } = req.body;
  try {
    const response = await axios.post('https://crm.woo-wa.com/send/message-text', {
      deviceId,
      number,
      message
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
