(function (angular) {
    'use strict';

    /**
     *
     * @param {Object} $state
     */
    function MenuStateService($state) {
        this.$state = $state;
    }

    MenuStateService.prototype.getMenuState = function () {
    };

    angular.module('app')
        .service('menuStateService', MenuStateService);
}(window.angular));
