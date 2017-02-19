(function (angular) {
    'use strict';

    /**
     *
     * @param {Object} $http
     */
    function JudgmentsService($http) {
        this.$http = $http;
    }

    /**
     *
     * @type {{apiHost: string}}
     */
    JudgmentsService.prototype.constants = {
        apiHost: angular.apiHost + '/judgments'
    };

    JudgmentsService.prototype.getJudgments = function (id) {
        return this.$http({
            url: this.constants.apiHost + '/' + id
        });
    };

    angular.module('app').service('judgmentsService', JudgmentsService);
}(window.angular));
