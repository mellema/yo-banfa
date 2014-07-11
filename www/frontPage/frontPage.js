angular.module('starter.frontPage', [])
.controller('frontPageCtrl', function($scope, $state) {
  $scope.enter = function() {
    $state.go('tab.account');
  };
});

