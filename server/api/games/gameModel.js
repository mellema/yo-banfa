var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  simpleHanzi: String,
  tradHanzi: String,
  pinyin: String,
  translation: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Game', GameSchema);