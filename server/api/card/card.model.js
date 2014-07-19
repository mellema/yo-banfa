
var mongoose = require('mongoose');
// var fs = require('fs');

// Load the csv file into lineList and split by line
//  var lineList = fs.readFileSync('server/api/card/hskLevel1.csv').toString().split('\n');
// // // Remove the headers
//  lineList.shift();

// // // Create the list of schemae keys for docRecurse **ORDER MATTERS**
//  var schemaKeyList = ['card_ID','groupName','tradHanzi','simpleHanzi','pinyin','english'];


var CardSchema = new mongoose.Schema({
  card_ID: Number,
  groupName: String,
  tradHanzi: String,
  simpleHanzi: String,
  pinyin: String,
  english: String
});

// Export card model for use in app
// // Export card model for use in app
module.exports = mongoose.model('Card', CardSchema);

// For use in populating db
 // var CardDoc = mongoose.model('Card', CardSchema);

// // Aggregate a list of all items from the file
// function queryAllEntries () {
//     CardDoc.aggregate(
//         {$group: {_id: '$card_ID',
//             groupName: '$groupName',
//             simpleHanzi: '$simpleHanzi',
//             tradHanzi: '$tradHanzi',
//             pinyin: '$pinyin',
//             english: '$english'
//         }}, function(err, qDocList) {
//         console.log(qDocList);
//         // process.exit(0);
//     });
// }

// // Recursively go through list adding documents.

// function createDocRecurse (err) {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
//     if (lineList.length) {
//         var line = lineList.shift();
//         var doc = new CardDoc();
//         line.split(',').forEach(function (entry, i) {
//             doc[schemaKeyList[i]] = entry;
//         });
//         doc.save(createDocRecurse);
//     } else {
//         // After the last entry query to show the result.
//         queryAllEntries();
//     }
// }

// createDocRecurse(null);

