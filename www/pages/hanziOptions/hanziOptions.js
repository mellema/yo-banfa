angular.module('starter.hanziOptions', [])
.controller('HanziOptionsCtrl', function($scope, $state, LS) {
  $scope.value = LS.getData();
  $scope.options = [
    {title: 'Traditional', hanzi: '繁體字'},
    {title: 'Simplified', hanzi: '简体字'},
    {title: 'Pinyin', hanzi: 'pīnyīn'}
  ];
  $scope.latestData = function() {
	return LS.getData();
  };
  $scope.update = function(val) {
<<<<<<< HEAD
	console.log('value', val);
	return LS.setData(val);
=======
	return LS.setData(val);
  };
  $scope.goDecks = function(val) {
	LS.setData(val);
    $state.go('../deckOptions/deckOptions.html');
>>>>>>> refactor Hanzi options
  };
});