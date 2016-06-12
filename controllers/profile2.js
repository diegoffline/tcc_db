// Load required packages
var Profile2 = require('../models/profile2');

// Create endpoint /api/beers for POSTS 
exports.postProfiles2 = function(req, res) {
  // Create a new instance of the Beer model
  var profile2 = new Profile2();

  // Set the beer properties that came from the POST data
  profile2.email = req.body.email;
  profile2.name = req.body.name;
  profile2.address = req.body.address;
  profile2.city = req.body.city;
  profile2.userId = req.user._id;


  // Save the beer and check for errors
   profile2.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer added to the locker!', data: profile2 });
  });
};

// Create endpoint /api/beers for GET
exports.getProfiles2 = function(req, res) {
  // Use the Beer model to find all beer
  Profile2.find({ userId: req.user._id },function(err, profiles2) {
    if (err)
      res.send(err);

    res.json(profiles2);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getProfile2 = function(req, res) {
  // Use the Beer model to find a specific beer
  Profile2.find({ userId: req.user._id, _id: req.params.profile2_id }, function(err, profile2) {
    if (err)
      res.send(err);

    res.json(profile2);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putProfile2 = function(req, res) {
  // Use the Beer model to find a specific beer
  Profile2.update({ userId: req.user._id, _id: req.params.profile2_id },{ email: req.body.email, name: req.body.name, address: req.body.address, city: req.body.city }, function(err, String, raw) {
    if (err)
      res.send(err);

    res.json({ message: ' updated com sucesso viadinho' });
  });

};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteProfile2 = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Profile2.remove({ userId: req.user._id, _id: req.params.profile2_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed from the locker!' });
  });
};