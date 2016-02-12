'use strict';

angular.module('heavenHell.judge', []).

controller('JudgeController', function($scope, $routeParams, $location, heavenHellAPI) {

    $scope.id = $routeParams.id;
    $scope.user = null;
    heavenHellAPI.getUsersDetails($scope.id).

        success(function (response) {
            $scope.user = response[0];
        });

    $scope.sendForm = function (input) {
        $scope.formData = [];
        $scope.formData = angular.copy(input);
        $scope.formData.user = angular.copy($scope.user.userId);

        if ($scope.userGetLogin() === true) {
            $scope.sendData();
        } 
        else {
            $scope.blur = 'blur';
            $scope.login = './js/login/login.html';
        }
    };

    $scope.sendData = function (data) {

        $scope.sendUserData = null;
        heavenHellAPI.sendUsersDetails($scope.formData).
            
            success(function (response) {
                $scope.sendUserData = response[0];
                console.log('uhuuu');
            }).

            error (function (){
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


});