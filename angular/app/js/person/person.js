'use strict';

/*global angular */

angular.module('heavenHell.person', []).

    controller('PersonController', function ($scope, $routeParams, heavenHellAPI) {

        $scope.id = $routeParams.id;
        $scope.person = null;
        heavenHellAPI.getPerson($scope.id).
            success(function (response) {
                $scope.person = response;
            });

    });
