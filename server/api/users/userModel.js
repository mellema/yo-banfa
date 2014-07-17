var mongoose = require('mongoose'),
<<<<<<< HEAD
    Game = require('../games/gameModel'),
    //bcrypt   = require('bcrypt'),
    Q        = require('q'),
    SALT_WORK_FACTOR  = 10;

=======
    Game = require('../games/gameModel.js')
>>>>>>> Complete outline for games/users controllers, models, and routes

var UserSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    require: true,
    unique: true
  },

  username: {
    type: String,
    trim: true,
  },

  friends: {
    type: Array,
    default: []
  },

  wins: {
    type: Number,
    default: 0
  },

  totalGames: {
    type: Number,
    default: 0
  },

  //currentGames should connect to Game schema
<<<<<<< HEAD
  // currentGames: [{ type: Schema.Types.ObjectId, ref: 'Game'}]
=======
  currentGames: [{ type: Schema.Types.ObjectId, ref: 'Game', creator: Boolean}]
>>>>>>> Complete outline for games/users controllers, models, and routes

  //future customization
  //preferredHanzi: String

});

UserSchema.methods.authorize = function (candidatePassword) {
  var checkOAuth = true;
  return checkOAuth;
};

/*var testUser = mongoose.model('User', UserSchema);
var johnDoe = new testUser ({
  username: 'johnDoe',
  friends: ['happy', 'sleepy', 'dopey']
});
johnDoe.save(function(err){if(err)console.log('err on johnDoe test')})*/

module.exports = mongoose.model('User', UserSchema);