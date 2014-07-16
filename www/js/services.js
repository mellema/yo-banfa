angular.module('starter.services', ['LocalStorageModule'])

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

  var getFriends = function(user){
    //returns results of ajax get request to api/links
    return $http({
      method: 'GET',
      url: '/api/users/' + user + '/friendslist'
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

.factory('FacebookLoginService', function($window, localStorageService){
  var url = 'localhost:9000/auth';
  var loginWindow, token, hasToken, userId, hasUserId;

  return {
    login: function() {
      loginWindow = $window.open(url, '_blank', 'location=no,toolbar=no,hidden=yes');
      loginWindow.addEventListener('loadstart', function(event){
        hasToken = event.url.indexOf('?oauth_token=');
        hasUserId = event.url.indexOf('&userId=');
        if(hasToken > -1 && hasUserId > -1){
          token = event.url.match('oauth_token=(.*)&userId')[1];
          userId = event.url.match('&userId=(.*)')[1];
          localStorageService.set('facebook-token', token);
          localStorageService.set('token-date', JSON.stringify(new Date()));
          localStorageService.set('userId', userId);
          loginWindow.close();
          location.href=location.pathname;
        }
      });
    },
  };
});
