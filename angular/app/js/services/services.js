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

    heavenHellAPI.sendUsersDetails = function(data) {
        return $http({
            url: 'data/send.json?'+data
        });
    }

    heavenHellAPI.getQualities = function(data) {
        return $http({
            url: 'data/qualities.json?'+data
        });
    }


    return heavenHellAPI;
});