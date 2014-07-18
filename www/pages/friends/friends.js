angular.module('starter.friends', [])

//The controller for the friends page.
.controller('FriendsCtrl', function($scope, $state, $window, Friends) {
  $scope.getFriends = Friends.getFriends;
  $scope.data = {};
  //uncomment this and use instead of johnDoe
  //$scope.data.user =  $window.localStorage.getItem('yobanfaUsername'); 
  $scope.getFriends('johnDoe').then(function(resp){
    console.log(resp.data);
    $scope.data.friends = resp.data;
  });

  $scope.toGame = function() {
  	//Link to game page
    $state.go('hanziOptions');
  };
});