'use strict';

/*global angular */
/*global FB */

angular.module('heavenHell.me', ['facebook', 'angularLazyImg']).

    config([
        'FacebookProvider',
        function (FacebookProvider) {
            var myAppId = '102249586831361';
            FacebookProvider.init(myAppId);
        }
    ]).

    controller('MeController', function ($scope, Facebook, $timeout) {

        $scope.getFriends = function () {
            FB.api(
                "/me/taggable_friends",
                {"limit": 1000},
                function (response) {
                    if (response && !response.error) {
                        console.log(response.data);
                        $scope.friendsList = response.data;
                    // $scope.paging = response.paging;
                    } else {
                        console.log('error');
                    }
                }
            );
        };

        $scope.buildFriends = function () {
            $scope.list = './js/me/list.html';
        };

        $scope.$on('Facebook:statusChange', function (data) {
            console.log('Status: ', data);
            $scope.userList = true;
            if (data.status === 'connected') {
                $scope.$apply(function () {
                    $scope.getFriends();
                });
            } else {
                $scope.$apply(function () {
                    // Dismiss byebye message after two seconds
                    $timeout(function () {
                        $scope.byebye = false;
                    }, 2000);
                });
            }

        });


        $scope.$watch(function () {
            // This is for convenience, to notify if Facebook is loaded and ready to go.
            return Facebook.isReady();
        }, function (newVal) {
            $scope.facebookReady = true;
            $scope.test = newVal;
        });

        $scope.getFriendInfo = function (userId) {
            FB.api(
                userId,
                function (response) {
                    if (response && !response.error) {
                        console.log(response);
                        $scope.friendInfo = response;

                    } else {
                        console.log('error');
                    }
                }
            );
        };

    });
