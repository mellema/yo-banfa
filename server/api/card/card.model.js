
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  simpleHanzi: String,
  tradHanzi: String,
  card_ID: Number,
  pinyin: String,
  english: String,
  groupName: String,
  active: Boolean
});

module.exports = mongoose.model('Card', CardSchema);
