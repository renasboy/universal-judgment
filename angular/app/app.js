'use strict';

angular.module('heavenHell', [
    'ngRoute',
    'heavenHell.home',
    'heavenHell.services'
    ]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        }).
        otherwise({redirectTo: '/'});
}]);
