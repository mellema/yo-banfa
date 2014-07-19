angular.module('starter.hanziOptions', [])
.controller('HanziOptionsCtrl', function($scope, $state, LS) {
  $scope.value = LS.getData();
  $scope.options = [
    {title: 'Traditional', hanzi: '繁體字', code: 'tradHanzi'},
    {title: 'Simplified', hanzi: '简体字', code: 'simpleHanzi'},
    {title: 'Pinyin', hanzi: 'pīnyīn', code: 'pinyin'}
  ];
  $scope.latestData = function() {
	return LS.getData();
  };
  $scope.update = function(val) {
	console.log('value', val);
	return LS.setData(val);
  };
});