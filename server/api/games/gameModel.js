var mongoose = require('mongoose'),
    User = require('../users/userModel.js'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  creator: {
  	type: Schema.ObjectId,
  	ref: 'User'
  },

  challenged: {
  	type: Schema.ObjectId,
  	ref: 'User'
  },

  deck: {
  	type: Array
  }
});

module.exports = mongoose.model('Game', GameSchema);