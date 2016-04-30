'use strict';

/*global angular */
/*global FB */

angular.module('heavenHell.facebook', ['facebook']).

    config([
        'FacebookProvider',
        function (FacebookProvider) {
            var myAppId = '102249586831361';
            FacebookProvider.init(myAppId);
        }
    ]).

    controller('FacebookController', function ($scope, $rootScope,  $timeout, Facebook, $q) {

        // Define user empty data :/
        $scope.FBuser = {};

        // Defining user logged status
        $rootScope.logged = false;

        // And some fancy flags to display messages upon user status change
        $scope.byebye = false;
        $scope.salutation = false;

        /**
        * Watch for Facebook to be ready.
        * There's also the event that could be used
        */
        $scope.$watch(
            function () {
                return Facebook.isReady();
            },
            function (newVal) {
                if (newVal) {
                    $scope.facebookReady = true;
                }
            }
        );

        var userIsConnected = false;

        Facebook.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                userIsConnected = true;
                $rootScope.logged = true;
            }
        });

        /**
        * IntentLogin
        */
        $scope.IntentLogin = function () {
            console.log(userIsConnected);
            if (!userIsConnected) {
                $scope.login();
            }
        };


        /**
        * Login
        */
        $scope.login = function () {
            Facebook.login(function (response) {
                if (response.status === 'connected') {
                    $scope.logged = true;
                    $scope.me();
                }

            }, {scope: 'email,user_friends'});
        };

        // $scope.login = function () {
        //     Facebook.login(function (response) {
        //             if (response.status == 'connected') {
        //                 $scope.loginTrue = true;
        //                 $scope.me();
        //             }

        //         }, {scope: 'email,user_likes'}
        //     );
        // };


        /**
        * me 
        */
        $scope.me = function () {
            Facebook.api('/me', function (response) {
        /**
        * Using $scope.$apply since this happens outside angular framework.
        */
                $scope.$apply(function () {
                    $scope.FBuser = response;
                });
            });
        };

        /**
        * Logout
        */
        $scope.logout = function () {
            Facebook.logout(function () {
                $scope.$apply(function () {
                    $scope.FBuser   = {};
                    $scope.logged = false;
                    userIsConnected = false;
                });
            });
        };

        /**
        * Taking approach of Events :D
        */
        $scope.$on('Facebook:statusChange', function (data) {
            console.log('Status: ', data);
            if (data.status === 'connected') {
                $scope.$apply(function () {
                    $scope.salutation = true;
                    $scope.byebye     = false;
                });
            } else {
                $scope.$apply(function () {
                    $scope.salutation = false;
                    $scope.byebye     = true;

            // Dismiss byebye message after two seconds
                    $timeout(function () {
                        $scope.byebye = false;
                    }, 2000);
                });
            }

        });

        $scope.getUserData = function (data) {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: data
            }, function (response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        };


        $scope.userData = function (data) {
            $scope.getUserData(data)
                .then(function (response) {
                    $scope.return = response;
                });
        };
    });