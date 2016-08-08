'use strict';

/*global angular */

angular.module('heavenHell.judge', []).

    controller('JudgeController', function ($scope, $rootScope, $routeParams, heavenHellAPI) {

        $scope.id = $routeParams.id;
        $scope.person = null;
        $scope.why = null;

        $scope.focused = function (scope, element) {
            console.log(scope, element);
            $scope.active = true;
        };

        $scope.blurred = function () {
            console.log("lost focus");
            $scope.active = false;
        };


        heavenHellAPI.getPerson($scope.id).
            success(function (response) {
                $scope.person = response;
            });

        $scope.sendForm = function () {
            $scope.formData = {
                "judged": null,
                "qualities": [],
                "why": ''
            };
            $scope.formData.judged = $scope.person.id
            if ($scope.why) {
                $scope.formData.why = $scope.why
            }
            angular.forEach($scope.qualities, function (value) {
                $scope.formData.qualities.push({
                    "id": value.id,
                    "score": parseInt(value.score)
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

            heavenHellAPI.sendJudgement($scope.formData).

                success(function (response) {
                    $scope.sendUserData = response[0];
                    $scope.blur = 'blur';
                    $scope.popup = './js/judge/sent.html';
                }).

                error(function () {
                    console.log('error');
                });
        };

        $scope.personGetLogin = function () {
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
