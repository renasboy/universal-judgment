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
    function PersonService($http) {
        this.$http = $http;
    }

    PersonService.prototype.constants = {
        apiHost: angular.apiHost + '/tuj/person'
    };

    PersonService.prototype.getPerson = function (id) {
        return this.$http({
            url: this.constants.apiHost + '/' + id
        });
    };

    PersonService.prototype.getMe = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    angular.module('app').service('personService', PersonService);
}(window.angular));