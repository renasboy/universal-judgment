angular.module('heavenHell.services', [])
.factory('heavenHellAPI', function($http) {

    var heavenHellAPI = {};

    heavenHellAPI.getUsers = function() {
        return $http({
            url: 'data/users.json'
        });
    }

    heavenHellAPI.getUsersDetails = function(id) {
        return $http({
            url: 'data/'+ id +'.json'
        });
    }

    return heavenHellAPI;
});