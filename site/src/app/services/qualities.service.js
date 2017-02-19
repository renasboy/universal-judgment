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
        apiHost: angular.apiHost + '/qualities'
    };

    QualitiesService.prototype.getQualities = function () {
        return this.$http({
            url: this.constants.apiHost
        });
    };

    angular.module('app').service('qualitiesService', QualitiesService);
}(window.angular));
