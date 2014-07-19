angular.module('starter.results', [])
.controller('ResultsCtrl', function($scope, $state, $window) {
  $scope.resultStatus = {};
  $scope.resultStatus.numCorrect = $window.localStorage.getItem('lastScore')

  $scope.return = function() {
    $state.go('friends');
  };
});

