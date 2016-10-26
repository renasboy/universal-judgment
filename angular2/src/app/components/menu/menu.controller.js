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
    function MenuController($state, authService) {
        this.menuActive = $state.current.name;
        this._authService = authService;
        this.logged = false;
        var that = this;

        this.isSearchOpen = false;

        this.logged = authService.isFacebookConnected();
    }

    MenuController.prototype.isActive = function (menuName) {
        return (menuName === this.menuActive) ? 'active' : '';
    };

    MenuController.prototype.facebookLogin = function () {
        this._authService.setFacebookLogin();
    };

    angular.module('app').controller('menuController', MenuController);
}(window.angular));
