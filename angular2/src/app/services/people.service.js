/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

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
        apiHost: angular.apiHost + '/tuj/people'
    };

    PeopleService.prototype.getPeople = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    PeopleService.prototype.getRank = function (rank) {
        var config = {};
        config[rank] = true;
        return this.$http({
            url: this.constants.apiHost,
            config: config
        });
    };

    angular.module('app').service('peopleService', PeopleService);
}(window.angular));
