angular.module('starter.controllers', ['starter.frontPage', 'starter.friends', 'starter.game', 'starter.results', 'starter.hanziOptions', 'starter.deckOptions'])


.factory('LS', function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
	if (event.key === 'my-storage') {
		$rootScope.apply();
	}
  });
  return {
	setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('my-storage', val);
      return this;
	},
	getData: function() {
      return $window.localStorage && $window.localStorage.getItem('my-storage');
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