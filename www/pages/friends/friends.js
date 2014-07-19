angular.module('starter.friends', [])

//The controller for the friends page.
.controller('FriendsCtrl', function($scope, $state, $window, Friends, Game, LS) {
  $scope.getFriends = Friends.getFriends;
  $scope.makeGame = Game.makeGame
  $scope.data = {};
  //uncomment this and use instead of johnDoe
  //$scope.data.user =  $window.localStorage.getItem('yobanfaUsername'); 
  $scope.getFriends('johnDoe').then(function(resp){
    console.log(resp.data);
    $scope.data.friends = resp.data;
  });

  $scope.toGame = function() {
    //Make game
    $scope.makeGame({creator: 'me', challenged: 'you'}).then(function(resp){
      console.log(resp.data);
      //Save game id
      $window.localStorage.setItem('currentGame', resp.data._id);
    	// Get hanziOptions from local storage
      var hanziOptions = LS.getData();
      // if they exist, route to deck, else to hanzi
      if (hanziOptions) {
        $state.go('deckOptions');
      } else {
        $state.go('hanziOptions');
      }
    });
  };
  // $scope.auth = function() {

  //   var id = localStorage.getItem('userID');
  //   var name = localStorage.getItem('userName');
  //   console.log(' auth friend userID: ' + id);
  // };
  

  $scope.$watch(localStorage['FBuserID'], function(newVal, oldVal){
    //Here your view content is fully loaded !!
    var id = localStorage.getItem('FBuserID');
    var name = localStorage.getItem('FBuserName');
    $scope.data.showUser = name !== "undefined" ? name : "";
    console.log('loaded friend userID: ' + id +': ' + newVal);
  });
});