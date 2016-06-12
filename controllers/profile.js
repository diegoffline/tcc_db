// Load required packages
var Profile = require('../models/profile');

// Create endpoint /api/beers for POSTS
exports.postProfiles = function(req, res) {
  // Create a new instance of the Beer model
var profile = new Profile();

  // Set the beer properties that came from the POST data
  profile.email = req.body.email;
  profile.password = req.body.password;
  profile.name = req.body.name;
  profile.image = req.body.image;
  profile.userId = req.user_id;

  // Save the beer and check for errors
   profile.save(function(err) {
    if (err)
      res.send(err);

    //res.json({ message: 'Beer added to the locker!', data: profile});
  });
};

// Create endpoint /api/beers for GET
exports.getProfiles = function(req, res) {
  // Use the Beer model to find all beer
  Profile.find({ userId: req.user._id },function(err, profiles) {
    if (err)
      res.send(err);

    res.json(profiles);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getProfile = function(req, res) {
  // Use the Beer model to find a specific beer
  Profile.find({ userId: req.user._id, _id: req.params.profile_id }, function(err, profile) {
    if (err)
      res.send(err);

    res.json(profile);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putProfile = function(req, res) {
  // Use the Beer model to find a specific beer
  Profile.update({ userId: req.user_id, _id: req.params.profile_id },{ email: req.body.email, password: req.body.password, name: req.body.name, image: req.body.image}, 
    function(err, String, String, String, String, raw) {
    if (err)
      res.send(err);

    res.json({ message: ' updated com sucesso viadinho' });
  });

};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteProfile = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Profile.remove({ userId: req.user._id, _id: req.params.profile_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed from the locker!' });
  });
};

/*  profile.local.email = req.local.email,
  profile.local.password = req.local.password,
  profile.local.name = req.local.name,
  profile.local.image = req.local.image,
  profile.address.lat = req.address.lat,
  profile.address.lon = req.address.lon,
  profile.address.full = req.address.full,
  profile.address.city = req.address.city,
  profile.address.state = req.address.state,
  profile.address.state_short = req.address.state_short,
  profile.address.zipcode = req.address.zipcode
*/