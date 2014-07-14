angular.module('starter.hanziOptions', [])
.controller('HanziOptionsCtrl', function($scope, $state) {
  $scope.goDecks = function() {
    $state.go('../deckOptions/deckOptions.html');
  };
});