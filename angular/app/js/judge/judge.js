'use strict';

/*global angular */

angular.module('heavenHell.judge', []).

    controller('JudgeController', function ($scope, $rootScope, $routeParams, heavenHellAPI) {

        $scope.id = $routeParams.id;
        $scope.user = null;

        $scope.focused = function (scope, element) {
            console.log(scope, element);
            $scope.active = true;
        };

        $scope.blurred = function () {
            console.log("lost focus");
            $scope.active = false;
        };


        heavenHellAPI.getUsersDetails($scope.id).
            success(function (response) {
                $scope.user = response;
            });

        $scope.sendForm = function () {
            $scope.formData = [];
            $scope.formData.qualities = [];

            $scope.formData.push({
                "judge": "renasBOY",
                "judged": $scope.user.id
            });

            angular.forEach($scope.qualities, function (value) {
                $scope.formData.qualities.push({
                    "id": value.id,
                    "score": value.score
                });
            });

            if ($rootScope.logged === true) {
                $scope.sendData();
            } else {
                $scope.blur = 'blur';
                $scope.popup = './js/login/login.html';
            }
        };

        $scope.calculateRatio = function () {
            $scope.total = 0;
            var value = 0;
            $scope.formData.qualities.forEach(function (element) {
                value = parseInt(element.score, 0);
                $scope.total = $scope.total + value;
            });
            $scope.total = $scope.total / $scope.formData.qualities.length;
        };

        $scope.sendData = function () {

            $scope.calculateRatio();

            $scope.sendUserData = null;

            heavenHellAPI.sendUsersDetails($scope.formData).

                success(function (response) {
                    $scope.sendUserData = response[0];
                    $scope.blur = 'blur';
                    $scope.popup = './js/judge/sent.html';
                }).

                error(function () {
                    console.log('error');
                });
        };

        $scope.userGetLogin = function () {
            return false;
        };

        $scope.cancel = function () {
            $scope.blur = '';
            $scope.login = '';
        };

        heavenHellAPI.getQualities($scope.id).
            success(function (response) {
                $scope.qualities = response;
                console.log(response);
            });
    });
