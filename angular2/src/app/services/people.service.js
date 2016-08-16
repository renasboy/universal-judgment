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
        apiHost: 'http://test.universaljudgment.com/tuj/people'
    };

    PeopleService.prototype.getPeople = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    angular.module('app').service('peopleService', PeopleService);
}(window.angular));
