angular.module('starter.controllers', ['starter.frontPage', 'starter.friends', 'starter.game', 'starter.results', 'starter.hanziOptions', 'starter.deckOptions'])


.factory('LS', function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
	if (event.key === 'hanziOptions') {
		$rootScope.apply();
	}
  });
  return {
	setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('hanziOptions', val);
      return this;
	},
	getData: function() {
      return $window.localStorage && $window.localStorage.getItem('hanziOptions');
	}
  };
})


.controller('MenuController', function ($scope, $location, MenuService) {
  // "MenuService" is a service returning mock data (services.js)
  $scope.list = MenuService.all();

  // $scope.goTo = function(page) {
  //   console.log('Going to ' + page);
  //   $location.url('/' + page);
  // };
});