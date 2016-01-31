angular.module('heavenHell.services', [])
  .factory('heavenHellAPI', function($http) {

    var heavenHellAPI = {};

    heavenHellAPI.getUsers = function() {
      return $http({
        method: 'JSONP',
        url: 'data/users.json?callback=JSON_CALLBACK'
      });
    }

    return heavenHellAPI;
  });