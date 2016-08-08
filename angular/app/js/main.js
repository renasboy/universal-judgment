'use strict';

/*global angular */

angular.module('heavenHell.main', []).

    controller("MenuController", function ($scope, $location, $rootScope, heavenHellAPI) {

        // TODO default to true, should be false
        $rootScope.logged = true;

        heavenHellAPI.getLoginStatus($scope.id).
            success(function (response) {
                if (response.return === false) {
                    $rootScope.logged = true;
                }
            });

        $scope.menuClass = function (page) {
            var current = $location.path().substring(1),
                menu = current.split('/', 1).toString();

            $scope.mainMenu = false;
            if (menu === "person" || menu === "judge") {
                $scope.mainMenu = true;
            }
            return page === current ? "active" : "";
        };
    });
