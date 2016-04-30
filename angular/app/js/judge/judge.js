'use strict';

/*global angular */

angular.module('heavenHell.judge', []).

    controller('JudgeController', function ($scope, $routeParams, heavenHellAPI) {

        $scope.id = $routeParams.id;
        $scope.user = null;

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

            if ($scope.userGetLogin() === true) {
                $scope.sendData($scope.formData);
            } else {
                $scope.blur = 'blur';
                $scope.login = './js/login/login.html';
            }
        };

        $scope.sendData = function (data) {

            console.log(data);

            $scope.sendUserData = null;
            heavenHellAPI.sendUsersDetails($scope.formData).

                success(function (response) {
                    $scope.sendUserData = response[0];
                    console.log('uhuuu');
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
            });
    });
