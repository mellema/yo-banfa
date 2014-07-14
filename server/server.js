// Require the necessary packages and 
// initiliaze express
// ================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure the app to use bodyParse()
// this lets us get data from a POST

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// set up the port

var port = process.env.PORT || 9000;

//   ROUTES FOR THE API
// ====================================
// get an instance of the express router
var router = express.Router();

//home route

router.get('/', function(req, res) {
	res.json({ message: 'hooray for Servers!'});
});

//other API routes here

//REGISTER THE ROUTES
// =================================
// all routes are prefixed with /api

app.use('/api', router);

//START THE SERVER
// ==================================
app.listen(port);
console.log('Now listening at port ' + port);
