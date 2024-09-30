const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  berhasil: [{ name: String, no: String }],
  gagal: [{ name: String, no: String }]
});

module.exports = mongoose.model('History', historySchema);
