angular.module('starter.game', [])
.controller('GameCtrl', function($scope, $state, $window, Game) {
  $scope.getGame = Game.getGame;
  $scope.data = {};
  $scope.data.gameId =  $window.localStorage.getItem('currentGame'); 

  $scope.getGame($scope.data.gameId).then(function(resp){
    console.log(resp.data);
    $scope.data.game = resp.data;
    $scope.data.game.deck = resp.data.deck;
  });
  $scope.enter = function() {
    $state.go('results');
  };
});

