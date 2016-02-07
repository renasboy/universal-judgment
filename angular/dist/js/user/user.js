'use strict';

angular.module('heavenHell.user', []).

controller('UserController', function($scope, $routeParams, $rootScope, heavenHellAPI) {

    $scope.id = $routeParams.id;
    $scope.user = null;
    heavenHellAPI.getUsersDetails($scope.id).
    success(function (response) {
        $scope.user = response[0];
    });

	$scope.getMyLastName = function() {
		facebookService.getMyLastName() 
			.then(function(response) {
				$scope.last_name = response.last_name;
			}
		);
	};    

});
