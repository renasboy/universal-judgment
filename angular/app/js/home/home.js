'use strict';

/*global angular */

angular.module('heavenHell.home', []).

    controller('HomeController', function ($scope, heavenHellAPI) {

        // $scope.nameFilter = null;
        // $scope.searchFilter = function (user) {
        //     var re = new RegExp($scope.nameFilter, 'i');
        //     return !$scope.nameFilter || re.test(user.givenName);
        // };

        $scope.usersList = [];
        heavenHellAPI.getUsers().
            success(function (response) {
                $scope.usersList = response;
            }).
            error(function () {
                console.log('error');
            });
    });
