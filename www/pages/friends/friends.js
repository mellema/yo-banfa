angular.module('starter.friends', [])
.controller('FriendsCtrl', function($scope, $state) {
  $scope.toGame = function() {
    $state.go('game');
  };
});