angular.module('starter.friends', [])

//The controller for the friends page.
.controller('FriendsCtrl', function($scope, $state, Friends) {
  $scope.getFriends = Friends.getFriends;
  $scope.data = {};
  $scope.getFriends('johnDoe').then(function(resp){
    console.log(resp.data);
    $scope.data.friends = resp.data;
  });

  $scope.toGame = function() {
  	//Link to game page
    $state.go('hanziOptions');
  };
});