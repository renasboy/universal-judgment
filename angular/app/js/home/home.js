'use strict';

angular.module('heavenHell.home', []).

  /* Users controller */
  controller('HomeCtrl', function($scope, heavenHellAPI) {
    $scope.nameFilter = null;
    $scope.usersList = [];
    $scope.searchFilter = function (user) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(user.givenName);
    };

    heavenHellAPI.getUsers().success(function (response) {
        $scope.usersList = response;
    }).error( function(){
    	console.log('error')
    });
  }).

  /* User controller */
  controller('HomeUserCtrl', function($scope, $routeParams, heavenHellAPI) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.user = null;

    heavenHellAPI.getUserDetails($scope.id).success(function (response) {
        $scope.user = response; 
    });

  });
