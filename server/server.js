  // The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');

var app = express();
//Security risk with body parser?

// connect to Mongo when the app initializes
mongoose.connect("mongodb://localhost/api");

//configure the server will all middleware and routing
require("./config/middleware.js")(app, express);

//export the app for testing and flexibility
module.exports = app;




