angular.module('starter.frontPage', [])
.controller('FrontPageCtrl', function($scope, $state, $window, Auth) {
  //temporary fix for oauth not working
  $scope.user = {};
  $scope.signin = function (isValid) {
    // if( !isValid ) { return; }
    // Auth.signup($scope.user)
    //   .then(function (token) {
    //     $window.localStorage.setItem('yobanfaUsername', $scope.user.username);
    //     $state.go('friends');
    //   })
    //   .catch(function (error) {
    //     alert("error");
    //   });
    console.log('signin!!!');
  };
});
