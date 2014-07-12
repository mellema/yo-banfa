angular.module('starter.frontPage', [])
.controller('FrontPageCtrl', function($scope, $state) {
  $scope.enter = function() {
    $state.go('friends');
  };
});

