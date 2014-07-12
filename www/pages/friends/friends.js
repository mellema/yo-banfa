angular.module('starter.friends', [])
.controller('FriendsCtrl', function($scope, $state) {
  $scope.enter = function() {
    $state.go('game');
  };
});