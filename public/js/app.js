window.app = angular.module('FrameworkPreview', ['ngCookies', 'ngResource', 'ngRoute','ui.bootstrap']);

/*
* 
*   User Managemente for main
*
*/
window.app.run(function($rootScope,localStorage,$location, $timeout){
  //.. watch change on location.path()
  $rootScope.location = $location;
  


  $rootScope.profileName = localStorage.get('user-profile');
  $rootScope.uuser = localStorage.get('user-access');
  $rootScope.userName = localStorage.get('user-name');
  $rootScope.Signed =  localStorage.getB('is-user-signed');

  //.. set user signed or unsigned stae to localStorage
  $rootScope.setUserStatus = function(uname, ustate, uuser, uprofile){
    localStorage.set('user-access', uuser);
    localStorage.set('user-name', uname);
    localStorage.set('is-user-signed', ustate);
    localStorage.set('user-profile', uprofile);
    $rootScope.userName =  uname;
    $rootScope.Signed = ustate;
    $rootScope.uuser = uuser;
    $rootScope.profileName =  uprofile;
  }
});
