'use strict';

angular.module('heavenHell', [
    'ngRoute',
    'heavenHell.services',
    'heavenHell.main',
    'heavenHell.home',
    'heavenHell.user',
    'heavenHell.judge',
    'heavenHell.facebook',
    'heavenHell.me'
    ]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'js/home/home.html',
        controller: 'HomeController'
    }).
    when('/user/:id', {
        templateUrl: 'js/user/user.html',
        controller: 'UserController'
    }).
    when('/judge/:id', {
        templateUrl: 'js/judge/judge.html',
        controller: 'JudgeController'
    }).
    when('/me', {
        templateUrl: 'js/me/me.html',
        controller: 'MeController'
    }). 
    otherwise({redirectTo: '/home'});
}]);