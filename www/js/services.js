angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
 .factory('MenuService', function() {

  // var menuItems = [
  //   { text: 'Grid', iconClass: 'icon ion-map', link: 'grid'},
  //   { text: 'Chats', iconClass: 'icon ion-map', link: 'chats'},
  //   { text: 'Chat', iconClass: 'icon ion-map', link: 'chat'},
  //   { text: '1 Page One', iconClass: 'icon ion-map', link: 'one'},
  //   { text: '2 Page Two', iconClass: 'icon ion-gear-b', link: 'two'},
  //   { text: '3 Page Three', iconClass: 'icon ion-star', link: 'three'}
  // ];
  var menuItems = [{text: 'Friends'}, {text: 'Enemies'}, {text: 'Losers'}];


  return {
    all: function() {
      return menuItems;
    }
  }
})
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  //return entire list of friends
  var getFriends = function(user){ 
    //returns results of ajax get request to api/links
    return $http({
      method: 'GET',
      url: '/api/users/' + user + '/friendslist'
    });
  };

  //return all games which the user did not create
  var getChallenges = function(user){ 
    return $http({
      method: 'GET',
      url: '/api/users/' + user + '/challenges'
    });
  };

  //functions injected when Friends is injected
  return {
    //test function
    all: function() {
      return friends;
    },

    //actual functions
    getFriends: getFriends,
    getChallenges: getChallenges
  }
})

.factory('Game', function(){
  //make a new game
  var makeGame = function(creator, data){
    return $http({
      method: 'POST',
      data: data,
      url: '/api/game/' + creator + '/creategame'
    })
  };

  //retrieve the cards for a game (for challenged player)
  var getGame = function(game){
    return $http({
      method: 'GET',
      url: '/api/game/' + game + '/getgame'
    })
  };

  //update game should return the scores.  It should also destroy 
  //or mark the game as complete on the server side
  var update = function(game, data){
    return $http({
      method: 'PUT',
      data: data,
      url: '/api/game/' + game + '/completegame'
    })
  };

  //functions injected when Game is injected
  return {
    makeGame: makeGame,
    getGame: getGame,
    update: update
  }
})

.factory('DeckOptions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var decks = [
    { id: 0, name: 'HSK' },
    { id: 1, name: 'Custom1' },
    { id: 2, name: 'Custom2' },
    { id: 3, name: 'Custom3' }
  ];

  return {
    all: function() {
      return decks;
    }//,
    // get: function(deckId) {
    //   // Simple index lookup
    //   return deck[deckId];
    // }
  }
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (userinfo) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: userinfo
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (userinfo) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: userinfo
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    signout: signout
  };
});