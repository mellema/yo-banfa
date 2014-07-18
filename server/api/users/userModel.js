var mongoose = require('mongoose'),
    Game = require('../games/gameModel.js'),
    Schema = mongoose.Schema;
    
var UserSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    require: true,
    unique: true
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
  currentGames: [{ type: Schema.Types.ObjectId, ref: 'Game', creator: Boolean}]

  //future customization
  //preferredHanzi: String

});

UserSchema.methods.authorize = function (candidatePassword) {
  var checkOAuth = true;
  return checkOAuth;
};

/*var testUser = mongoose.model('User', UserSchema);
var coolDoe = new testUser ({
  facebookId: 'coolDoe',
  friends: ['happy', 'sleepy', 'dopey']
});
coolDoe.save(function(err){if(err)console.log('err on coolDoe test')})*/

module.exports = mongoose.model('User', UserSchema);