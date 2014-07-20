var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  //app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);
  app.get('/:username/friendslist', userController.getFriends);
  //app.get('/:username/challenges', userController.getChallenges);
  app.get('/:username/facebookId', userController.getFriends);
  app.put('/:game/addgame', userController.addGame)

};