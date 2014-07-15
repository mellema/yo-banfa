angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  var getFriends = function(){ //formerly known as getHotLinks
    //returns results of ajax get request to api/links
    return $http({
      method: 'GET',
      url: '/api/users/friendslist'
    });
  };

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    },
    getFriends: getFriends
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

.factory('Links', function ($http) {
  //create getLinks variable

})
