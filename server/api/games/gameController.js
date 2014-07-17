var Game = require('./gameModel.js'),
    User = require('../users/userModel.js')

module.exports = {
  //add Game to database.  Shuffle deck
  create: function (req, res) {
    var newDeck = []
    var allCards;
    Card.find(function (err, cards) {
      if(err) { return handleError(res, err); }
      allCards = cards;
      //generate deck of length 10
      while (newDeck.length < 10 && allCards.length > 0){
        rng = Math.random() * allCards.length;
        newDeck.push(allCards[rng])
        allCards.splice(rng, 0);
      }

      var newGame = {
        creator: req.creator,
        challenged: req.challenged,
        deck: newDeck
      }
      Game.create(newGame, function(err, game){
        if (err){ return handleError(res, err); }
        //deck should be returned to user after creation
        return res.json(201, game.deck);
      });
    });

  },

  //get game from database
  load: function (req, res) {
    //load a game after a user accepts a challenge
/*    Game.findOne({challenged: req.challenged}, function (err, user) {
      if(err) { return handleError(res, err); }
      if(!user) { return res.send(404); }
        res.json(game.deck);
    });*/
  },

  //update when the user completes the game
  update: function (req, res){
    //update user's score
    //callback should get scores for both players
/*    var scoreToUpdate = req.creator === true ? creatorScore : challengedScore;
    var searchKey = req.creator === true ? creator : challenged;
    var conditions = {};
    conditions[searchKey] = req.player;
    Game.update(...)*/
  },

  //return scores after player updates (callback)
  getScores: function (req, res){
    //if both scores are >= 0
    //  call destroy function in callback
    //  alternatively, keep games forever and mark as complete
/*    var conditions = {};
    Game.findOne({username: req.params.username}, function (err, user) {
      if(err) { return handleError(res, err); }
      if(!user) { return res.send(404); }
        res.json(user.friends);
    });*/
  },

  //destroy when both users complete the game (should do a request at end of game for both scores)
  destroy: function(req, res){
    //remove specific game document from database
  }
};