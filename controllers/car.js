// Load required packages
var Car = require('../models/car');

// Create endpoint /api/beers for POSTS 
exports.postCars = function(req, res) {
  // Create a new instance of the Beer model
  var car = new Car();

  // Set the beer properties that came from the POST data
  car.placa = req.body.placa;
  car.modelo = req.body.modelo;
  car.cor = req.body.cor;
  car.assento = req.body.assento;
  car.userId = req.user._id;


  // Save the beer and check for errors
   car.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer added to the locker!', data: car });
  });
};

// Create endpoint /api/beers for GET
exports.getCars = function(req, res) {
  // Use the Beer model to find all beer
  Car.find({ userId: req.user._id },function(err, cars) {
    if (err)
      res.send(err);

    res.json(cars);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getCar = function(req, res) {
  // Use the Beer model to find a specific beer
  Car.find({ userId: req.user._id, _id: req.params.car_id }, function(err, car) {
    if (err)
      res.send(err);

    res.json(car);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putCar = function(req, res) {
  // Use the Beer model to find a specific beer
  Car.update({ userId: req.user._id, _id: req.params.car_id },{ placa: req.body.placa, modelo: req.body.modelo, cor: req.body.cor, assento: req.body.assento  }, function(err, String, String, String, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: ' updated com sucesso viadinho' });
  });

};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteCar = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Car.remove({ userId: req.user._id, _id: req.params.car_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed from the locker!' });
  });
};