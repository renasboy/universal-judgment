'use strict';

angular.module('heavenHell.judge', []).

controller('JudgeController', function($scope, $routeParams, heavenHellAPI) {

    $scope.id = $routeParams.id;
    $scope.user = null;
    heavenHellAPI.getUsersDetails($scope.id).
    success(function (response) {
        $scope.user = response[0];
    });


    $scope.input = {
        value: 2
    };    

});
