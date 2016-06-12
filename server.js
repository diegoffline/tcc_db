// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var carController = require('./controllers/car');
var userController = require('./controllers/user');
var profile2Controller = require('./controllers/profile2');
var clientController = require('./controllers/client');
var oauth2Controller = require('./controllers/oauth2');
var passport = require('passport');
var authController = require('./controllers/auth');



// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/tcc_db');

// Create our Express application
var app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());


// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/cars')
  .post(authController.isAuthenticated, carController.postCars)
  .get(authController.isAuthenticated, carController.getCars);


// Create endpoint handlers for /beers/:beer_id
router.route('/cars/:car_id')
  .get(authController.isAuthenticated, carController.getCar)
  .put(authController.isAuthenticated, carController.putCar)
  .delete(authController.isAuthenticated, carController.deleteCar);


//profile novo
router.route('/profiles2')
  .post(authController.isAuthenticated, profile2Controller.postProfiles2)
  .get(authController.isAuthenticated, profile2Controller.getProfiles2);


// Create endpoint handlers for /beers/:beer_id
router.route('/profile2/:profile2_id')
  .get(authController.isAuthenticated, profile2Controller.getProfile2)
  .put(authController.isAuthenticated, profile2Controller.putProfile2)
  .delete(authController.isAuthenticated, profile2Controller.deleteProfile2);


router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);


 // Create endpoint handlers for /clients
router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

   // Create endpoint handlers for /clients/:clients_id


  // Create endpoint handlers for oauth2 authorize
router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);


// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3001);