angular.module('starter.friends', [])

//The controller for the friends page.
.controller('FriendsCtrl', function($scope, $state) {
  $scope.toGame = function() {
  	//Link to game page
    $state.go('game');
  };
});