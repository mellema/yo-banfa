  // The main application script, ties everything together.

var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();
// var app.use(passport.initialize());
/*passport.use(new FacebookStrategy({
    clientID: 648798351882921,
    clientSecret: fd19734e0be95df8f41499bbe345406e,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));*/
//Security risk with body parser?

// connect to Mongo when the app initializes
mongoose.connect("mongodb://localhost/api");

//configure the server will all middleware and routing
require("./config/middleware.js")(app, express);

//export the app for testing and flexibility
module.exports = app;




