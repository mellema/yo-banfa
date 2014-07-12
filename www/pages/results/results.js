angular.module('starter.results', [])
.controller('ResultsCtrl', function($scope, $state) {
  $scope.enter = function() {
    $state.go('friends');
  };
});

