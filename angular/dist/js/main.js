'use strict';

angular.module('heavenHell.main', []).

controller("MenuController", function($scope, $location) {

    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);

        var menu = current.split('/',1).toString();
        $scope.mainMenu = false;
        if (menu === "user") {
            $scope.mainMenu = true;
        }

        return page === current ? "active" : "";
    };
});