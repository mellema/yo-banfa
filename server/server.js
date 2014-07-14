// The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var app = module.exports = express.createServer();
var api = require('./controllers/api.js');

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');

//Configure our express server instance
app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

//Set up our port
var port = process.env.PORT || 9000;

// set up the RESTful API, handler methods are defined in api.js
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);


//Listen on port and log status
app.listen(port);
console.log("Express server listening on port %d", app.address().port);



