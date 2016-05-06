'use strict';

/*global angular */

angular.module('heavenHell.main', []).

    controller("MenuController", function ($scope, $location, $rootScope, heavenHellAPI) {

        $rootScope.logged = false;


        heavenHellAPI.getUserStatus($scope.id).
            success(function (response) {
                console.log(response.return);
                if (response.return === false) {
                    $rootScope.logged = true;
                }
            });

        $scope.menuClass = function (page) {
            var current = $location.path().substring(1),
                menu = current.split('/', 1).toString();

            $scope.mainMenu = false;
            if (menu === "user" || menu === "judge") {
                $scope.mainMenu = true;
            }
            return page === current ? "active" : "";
        };
    });
