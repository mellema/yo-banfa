var mongoose = require('mongoose'),
    Game = require('../games/gameModel.js'),
    Schema = mongoose.Schema;
    
var UserSchema = new mongoose.Schema({
  facebookId: {
    type: String,
    require: true,
    unique: true
  },

/*  fbAuth: {
    type: Boolean,
    default: false
  },*/

  userName: {
    type: String,
    require: true
  },

  // image: {
  //   data: Buffer,
  //   contentType: String
  // },
  image: {
    type: String,
    default: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/t1.0-1/c3.0.50.50/p50x50/10251924_1378106325807203_5818546993005537900_n.jpg"
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
  //can add a complete key in case a user were to close the game midgame, 
  //if a creator logs in with an incomplete game they could be given a score of 0
  currentGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }] //creator: Boolean

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