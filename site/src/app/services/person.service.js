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
        apiHost: angular.apiHost + '/person'
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
