'use strict';

/*global angular */

angular.module('heavenHell.main', []).

    controller("MenuController", function ($scope, $location, $rootScope) {

        $rootScope.logged = false;

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
