var Game = require('./gameModel.js'),
    User = require('../users/userModel.js'),
    Card = require('../card/card.model.js')

module.exports = {
  //add Game to database.  Shuffle deck
  create: function (req, res) {
    var newDeck = []
    var allCards;
    Card.find(function (err, cards) {
      if (err){ return handleError(res, err); }
      allCards = cards;
      //generate deck of length 10
      while (newDeck.length < 10 && allCards.length > 0){
        var rng = Math.round(Math.random() * allCards.length);
        newDeck.push(allCards[rng])
        allCards.splice(rng, 1);
      }

      var newGame = {
        creator: "req.creator",
        challenged: "req.challenged",
        deck: newDeck
      }
      Game.create(newGame, function(err, game){
        if (err){ console.log(err); }
        //deck should be returned to user after creation
        return res.json(201, game);
      });
    });

  },

  //get game from database
  load: function (req, res) {
    //load a game after a user accepts a challenge
    Game.findOne({_id: req.params.game}, function (err, game) {
      if (err){ console.log(err); }
      if (!game){ return res.send(404); }
      res.json(game);
    });
  },

  //update when the user completes the game
  update: function (req, res){
    //update user's score
    //callback should get scores for both players
    var conditions = {_id: req.params.game};
    var scoreToUpdate = req.creator === true ? creatorScore : challengedScore;
    var update = {};
    update[scoreToUpdate] = req.score
    Game.update(conditions, update, function(err, numupdated){
      if (err){ console.log(err);} 
      Game.findOne(conditions, function (err, game) {
        if(err) { console.log(err); }
        if (game.creatorScore > -1 && game.challengedScore > -1){
          Game.update(conditions, {complete: true}, function(err, numupdated){
            if (err){ console.log(err);}
            res.json(game);
          });
        } else {
          res.json(game);
        }
      });
    });
  },

  //return scores.  May be superfluous.
  getScores: function (req, res){
    //if both scores are >= 0
    //  call destroy function in callback
    //  alternatively, keep games forever and mark as complete
/*    Game.findOne({id: req.params.game}, function (err, game) {
      if(err) { return handleError(res, err); }
      if(!user) { return res.send(404); }
      res.json(game);
    });*/
  },

  //destroy when both users complete the game (should do a request at end of game for both scores)
  destroy: function(req, res){
    //remove specific game document from database
  }
};