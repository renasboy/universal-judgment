(function (angular) {
    'use strict';

    /**
     *
     * @param {Object} $http
     */
    function JudgmentService($http) {
        this.$http = $http;
    }

    /**
     *
     * @type {{apiHost: string}}
     */
    JudgmentService.prototype.constants = {
        apiHost: angular.apiHost + '/judgment'
    };

    /**
     *
     * @returns {Promise}
     */
    JudgmentService.prototype.sendJudgment = function (data) {
        // Implement get cookie
        // var csrfToken = getCookie('csrftoken');
        // var config = {
        //     headers: {
        //         'X-CSRFToken': csrfToken
        //     }
        // };
        return this.$http.post(this.constants.apiHost, data);
        // change API to accept cross domain post
    };

    angular.module('app').service('judgmentService', JudgmentService);
}(window.angular));
