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
    function MenuController($state, authService, $rootScope) {

        this.menuActive = $state.current.name;
        this._authService = authService;
        this._rootScope = $rootScope;
        this.logged = false;
        var that = this;


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
        return menuIsActive
    };

    MenuController.prototype.facebookLogin = function () {
        var that = this;
        this._rootScope.logged || that._authService.setFacebookLogin();
    };

    angular.module('app').controller('menuController', MenuController);
}(window.angular));
