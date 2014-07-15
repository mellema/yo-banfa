var User = require('./userModel.js'),
    Q    = require('q'),
    jwt  = require('jwt-simple');

module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;

    var findUser = Q.nbind(User.findOne, User);
    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.authorize(password);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  signup: function (req, res, next) {
  },

  checkAuth: function (req, res, next) {
  }
};