angular.module('starter.game', [])
.controller('GameCtrl', function($scope, $scope, $state, $window, Game) {
  //reset game
  $scope.gameStatus = $scope.gameStatus || {};
  $scope.gameStatus.counter = $scope.gameStatus.counter || 0;
  $scope.gameStatus.numCorrect =  0;
  $scope.gameStatus.cards = [];
  //grab 3 random cards and the correct one
  $scope.shuffle = function(){
  	var tempPossibilities = [];
  	for (var i = 0; i < $scope.data.game.deck.length; i++){
  	  if (i !== $scope.gameStatus.counter)
  	    tempPossibilities.push($scope.data.game.deck[i]);
  	}
  	var tempCards = [];
  	for (var i = 0; i < 3; i++){
  	  var rng = Math.floor(Math.random() * tempPossibilities.length - 1) + 1;
  	  tempCards.push(tempPossibilities[rng]);
  	  tempPossibilities.splice(rng, 1)
	}
	//Insert answer at random index
	var randomIndex = Math.floor(Math.random() * 3) + 1
	var answer = $scope.data.game.deck[$scope.gameStatus.counter];
	answer['answer'] = true;
	tempCards.splice(randomIndex, 0, answer)
	$scope.gameStatus.cards = tempCards;
  }


  //find game id from localStorage
  $scope.getGame = Game.getGame;
  $scope.data = {};
  $scope.data.gameId = $window.localStorage.getItem('currentGame'); 

  $scope.getGame($scope.data.gameId).then(function(resp){
    console.log(resp.data);
    $scope.data.game = resp.data;
    $scope.data.game.deck = resp.data.deck;
    $scope.shuffle()
  });
/*  $scope.enter = function() {
    $state.go('results');
  };*/

  $scope.next = function(card){
  	console.log(card.answer)
    //move to next card
  	$scope.gameStatus.counter++

  	//increment score
  	if (card.answer){
  	  $scope.gameStatus.numCorrect++
    }
  	console.log($scope.gameStatus.numCorrect)

  	//stop at deck length
  	if ($scope.gameStatus.counter < $scope.data.game.deck.length){
  		$scope.shuffle()
  		//$state.go('game');
  	} else {
  		//store result on localStorage
  		$state.go('results');
  	}
  }
});

