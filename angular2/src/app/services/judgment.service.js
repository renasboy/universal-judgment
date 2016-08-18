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
    function JudgementService($http) {
        this.$http = $http;
    }

    /**
     *
     * @type {{apiHost: string}}
     */
    JudgementService.prototype.constants = {
        apiHost: 'http://test.universaljudgement.com/tuj/judgement'
    };

    /**
     *
     * @returns {Promise}
     */
    JudgementService.prototype.sendJudgment = function (data) {
        // TODO Implement get cookie
        // var csrfToken = getCookie('csrftoken');
        // var config = {
        //     headers: {
        //         'X-CSRFToken': csrfToken
        //     }
        // };
        return this.$http.post(this.constants.apiHost, data);
        // TODO change API to accept cross domain post
    };

    angular.module('app').service('judgementService', JudgementService);
}(window.angular));
