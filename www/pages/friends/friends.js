angular.module('starter.friends', [])

//The controller for the friends page.
.controller('FriendsCtrl', function($scope, $state, $window, Friends, Game) {
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
      console.log(resp.data)
      //Save game id
      $window.localStorage.setItem('currentGame', resp.data._id);
    	//Link to game page
      $state.go('hanziOptions');
    })
  };
});