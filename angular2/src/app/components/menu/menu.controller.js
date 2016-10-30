/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * The menu page controller
     * @param $state
     * @param authService
     * @param $rootScope
     * @constructor
     */
    function MenuController($state, authService, $rootScope) {
        this.menuActive = $state.current.name;
        this._authService = authService;
        this._rootScope = $rootScope;
        this.logged = false;

        this.isSearchOpen = false;
    }

    MenuController.prototype.isActive = function (menuName) {
        var that = this;
        var menu = menuName.split(',');
        var menuIsActive = '';
        angular.forEach(menu, function (menuItem) {
            if (menuIsActive === '') {
                menuIsActive = (menuItem === that.menuActive) ? 'active' : '';
            }
        });
        return menuIsActive;
    };

    MenuController.prototype.facebookLogin = function () {
        if (!this._rootScope.logged) {
            this._authService.setFacebookLogin();
        }
    };

    angular.module('app').controller('menuController', MenuController);
}(window.angular));
