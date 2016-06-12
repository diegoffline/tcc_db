var mongoose = require('mongoose');

// Define our car schema
var Profile2Schema   = new mongoose.Schema({
  email:String,
  name:String,
  address:String,
  city:String,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Profile2', Profile2Schema);