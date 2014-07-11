angular.module('starter.game', [])
.controller('GameCtrl', function($scope, $state) {
  $scope.enter = function() {
    $state.go('tab.account');
  };
});

