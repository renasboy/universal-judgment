'use strict';

/*global angular */

angular.module('heavenHell.user', []).

    controller('UserController', function ($scope, $routeParams, heavenHellAPI) {

        $scope.id = $routeParams.id;
        $scope.user = null;
        heavenHellAPI.getUsersDetails($scope.id).
            success(function (response) {
                $scope.user = response;
                console.log(response);
            });

    });
