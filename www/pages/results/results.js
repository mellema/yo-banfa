angular.module('starter.results', [])
.controller('ResultsCtrl', function($scope, $state) {
  $scope.return = function() {
    $state.go('friends');
  };
});

