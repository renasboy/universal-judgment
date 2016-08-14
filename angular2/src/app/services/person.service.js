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
        apiHost: 'http://www.universaljudgment.com/tuj/person/'
    };

    PersonService.prototype.getPerson = function (id) {
        return this.$http({
            url: this.constants.apiHost + id
        });
    };

    angular.module('app').service('personService', PersonService);
}(window.angular));
