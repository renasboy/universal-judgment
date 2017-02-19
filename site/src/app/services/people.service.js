(function (angular) {
    'use strict';

    /**
     *
     * @param {Object} $http
     */
    function PeopleService($http) {
        this.$http = $http;
    }

    PeopleService.prototype.constants = {
        apiHost: angular.apiHost + '/people'
    };

    PeopleService.prototype.getPeople = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    PeopleService.prototype.getRank = function (rank) {
        var params = {};
        params[rank] = true;
        return this.$http({
            url: this.constants.apiHost,
            params: params
        });
    };

    angular.module('app').service('peopleService', PeopleService);
}(window.angular));
