angular.module('starter.controllers', ['starter.frontPage', 'starter.friends', 'starter.game', 'starter.results'])

.controller('DashCtrl', function($scope) {
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

