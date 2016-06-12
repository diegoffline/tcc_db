var mongoose = require('mongoose');

// Define our car schema
var PoolSchema   = new mongoose.Schema({
  
  user: [UserSchema]	
  car: [CarSchema],
  created_at: Date,
  userId: String
});

// Export the Mongoose model

module.exports = mongoose.model('Pool', PoolSchema);

