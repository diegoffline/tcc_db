var mongoose = require('mongoose');

// Define our car schema
var ProfileSchema   = new mongoose.Schema({

	email		: String,
	password	: String,
	name		: String,
	image		: String,
    userId 		: String
});


// Export the Mongoose model
module.exports = mongoose.model('Profile', ProfileSchema);

/*
{ type: String, set: toLower, unique: true, uniqueCaseInsensitive: true }

function toLower(str) {
	return str.toLowerCase();

  local            : {

  		},

	
	address          : {
		lat          : String,
		lon          : String,
		full         : String,
		city         : String,
		state        : String,
		state_short  : String,
		zipcode      : String
	},
}*/
