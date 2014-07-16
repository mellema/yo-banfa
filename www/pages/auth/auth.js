angular.module('starter.auth', ['LocalStorageModule'])

.controller('AuthenticationCtrl', function($scope, $state, localStorageService){

  if (localStorageService.get('facebook-token') && isTokenInDate(localStorageService)){
    // User.get({id: localStorageService.get('userId')}, function(user){
      $state.transitionTo('frontPage');
      $scope.Authenticated = true;
    // });
  } else {
    $scope.needsAuthentication = true;
  }

  $scope.logout = function (){
    localStorageService.clearAll();
    location.href=location.pathname;
  };
})

.controller('LoginCtrl', function($scope, FacebookLoginService){
  $scope.facebooklogin = FacebookLoginService.login;
})
