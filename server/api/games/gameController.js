var Game = require('./gameModel.js'),
    User = require('../users/userModel.js')

module.exports = {
  //add Game to database.  Shuffle deck
  create: function (req, res) {
    var newGame = {
      creator: "53c5b12f1c89a4e0191609a7",
      challenged: "53c5b12f1c89a4e0191609a7",
      deck: [],
    }
    Game.create(newGame, function(err, game){
      if (err){ return handleError(res, err); }
      //game should be returned to user after creation
      return res.json(201, game);
    });
  },

  //get game from database
  load: function (req, res) {
    //load a game after a user accepts a challenge
  },

  //update when the user completes the game
  update: function (req, res){
    //update user's score
    //callback should get scores for both players
  },

  //return scores after player updates (callback)
  getScores: function (req, res){
    //if both scores are >= 0
    //  call destroy function in callback
    //  alternatively, keep games forever.
  },

  //destroy when both users complete the game (should do a request at end of game for both scores)
  destroy: function(req, res){
    //remove specific game document from database
  }
};