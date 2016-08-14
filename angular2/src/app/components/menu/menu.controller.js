/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * The menu page controller
     * @param {Object} $state
     * @constructor
     */
    function MenuController($state) {
        this.menuActive = $state.current.name;
        this.logged = true;
    }

    MenuController.prototype.isActive = function (menuName) {
        return (menuName === this.menuActive) ? 'active' : '';
    };

    angular.module('app').controller('menuController', MenuController);
}(window.angular));
