'use strict';

/*global angular */

angular.module('heavenHell', [
    'ngRoute',
    'heavenHell.services',
    'heavenHell.directives',
    'heavenHell.main',
    'heavenHell.home',
    'heavenHell.person',
    'heavenHell.judge',
    'heavenHell.me'
]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'js/home/home.html',
                controller: 'HomeController'
            }).
            when('/person/:id', {
                templateUrl: 'js/person/person.html',
                controller: 'PersonController'
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
