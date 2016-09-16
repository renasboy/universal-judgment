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
    function QualitiesService($http) {
        this.$http = $http;
    }

    QualitiesService.prototype.constants = {
        apiHost: 'http://test.universaljudgment.com/tuj/qualities'
    };

    QualitiesService.prototype.getQualities = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    angular.module('app').service('qualitiesService', QualitiesService);
}(window.angular));
