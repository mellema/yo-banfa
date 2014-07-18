var User = require('./userModel'),
    Q    = require('q'),
    jwt  = require('jwt-simple');

module.exports = {
  //add user to database
  signup: function (req, res, next) {
    User.create({facebookId: req.body.username, friends: req.body.friends}, function(err, user) {
      if(err) { console.log(err) }
      res.json(201, user);
    });
  },


  //search database for user
  signin: function (req, res, next) {
    //if user in database,
    // update friends list
  },

  //check whether user is authorized
  checkAuth: function (req, res, next) {
  },

  //get list of all user's friends
  getFriends: function(req, res) {
    User.findOne({username: req.params.username}, function (err, user) {
      if(err) { console.log(err); }
      if(!user) { return res.send(404); }
        res.json(user.friends);
    });
  },

  getChallenges: function(req, res) {
    //after signin, 
    //  check challenges
  }
};