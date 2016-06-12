var mongoose = require('mongoose');

// Define our car schema
var CarSchema   = new mongoose.Schema({
  placa: String,
  modelo: String,
  cor: String,
  assento: Number,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Car', CarSchema);