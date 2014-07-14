  // The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
//Security risk with body parser?
var bodyParser = require('body-parser');
var app = module.exports = express();
var api = require('./api/controllers.js');

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/api');

//Configure our express server instance
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//MethodOvverride?
var router = express.Router();

//Set up our port
var port = process.env.PORT || 9000;


// set up the RESTful API, handler methods are defined in api.js
router.post('/thread', api.post);
router.get('/thread/:title.:format?', api.show);
router.get('/thread', api.list);

app.use('/', router);


//Listen on port and log status
app.listen(port);
console.log("Express server listening on port ", port);



