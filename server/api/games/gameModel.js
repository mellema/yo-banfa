var mongoose = require('mongoose'),
    User = require('../users/userModel.js'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  creator: {
  	//type: Schema.Types.ObjectId,
    type: String,
  	ref: 'User'
  },

  challenged: {
  	//type: Schema.Types.ObjectId,
    type: String,
  	ref: 'User'
  },

  deck: {
  	type: Array,
  	default: []
  },

  creatorScore: {
  	type: Number,
  	default: -1
  },

  challengedScore: {
  	type: Number,
  	default: -1
  },

  complete: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Game', GameSchema);