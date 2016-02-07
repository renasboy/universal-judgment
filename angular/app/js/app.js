'use strict';

angular.module('heavenHell', [
    'ngRoute',
    'heavenHell.services',
    'heavenHell.main',
    'heavenHell.home',
    'heavenHell.user'
    ]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'js/home/home.html',
        controller: 'HomeController'
    }).
    when('/user/:id', {
        templateUrl: 'js/user/user.html',
        controller: 'UserController'
    }).
    otherwise({redirectTo: '/'});
}]);