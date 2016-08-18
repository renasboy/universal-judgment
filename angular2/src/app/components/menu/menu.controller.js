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
    function MenuController($state, personService) {
        this.menuActive = $state.current.name;
        this.logged = false;
        var that = this;
        personService.getMe().then(function (person) {
            if (person.data.id !== 0) {
                that.logged = true;
            }
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    }

    MenuController.prototype.isActive = function (menuName) {
        return (menuName === this.menuActive) ? 'active' : '';
    };

    angular.module('app').controller('menuController', MenuController);
}(window.angular));
