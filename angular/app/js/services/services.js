'use strict';

/*global angular */

angular.module('heavenHell.services', [])
    .factory('heavenHellAPI', function ($http) {

        var heavenHellAPI = {};
        var apiHost = 'http://www.universaljudgment.com/tuj'

        var getCookie = function (name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        };

        heavenHellAPI.getPeople = function () {
            return $http({
                url: apiHost + '/people'
            });
        };

        heavenHellAPI.getPerson = function (id) {
            return $http({
                url: apiHost + '/person/' + id
            });
        };

        heavenHellAPI.sendJudgement = function (data) {
            console.log(data)
            var csrf_token = getCookie('csrftoken');
            console.log(csrf_token)
            var config = {
                'headers': {
                    "X-CSRFToken": csrf_token
                }
            }
            return $http.post(apiHost + '/judgement', data, config);
        };

        heavenHellAPI.getQualities = function (data) {
            return $http({
                url: apiHost + '/qualities'
            });
        };

        heavenHellAPI.getLoginStatus = function () {
            return $http({
                url: apiHost + '/person'
            });
        };

        return heavenHellAPI;
    });
