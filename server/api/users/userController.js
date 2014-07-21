var User = require('./userModel'),
    Q    = require('q'),
    jwt  = require('jwt-simple');

module.exports = {
  //Add user to database
/*  signup: function (req, res, next) {
    User.create({facebookId: req.body.username, friends: req.body.friends}, function(err, user) {
      if(err) { console.log(err) }
      res.json(201, user);
    });
  },*/


  //Search database for user.  signup currently rolled into here.
  signin: function (req, res, next) {
    User.findOne({facebookId: req.body.facebookId}, function(err, user){
      if(err) { console.log(err) }
      if(!user){
        var conditions = {facebookId: req.body.facebookId, username: req.body.username, friends: ["Marie Curie"]}
        User.create(conditions, function(err, user) {
          if(err) { console.log(err) }
          res.json(201, user);
        });
      } else {
        res.json(user)
      }
    })

  },

  //Get list of all user's friends
  getFriends: function(req, res) {
    User.findOne({facebookId: req.params.username}, function (err, user) {
      if(err) { console.log(err); }
      if(!user) { return res.send(404); }
        res.json(user.friends);
    });
  },

  getChallenges: function(req, res) {
    //after signin, 
    //  check challenges
  },

  //Check whether user is authorized
  checkAuth: function (req, res, next) {
  }

};