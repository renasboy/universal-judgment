(function (angular) {
    'use strict';

    /**
     * Person controller
     * @param {PersonService} personService
     * @param {AuthService} authService
     * @constructor
     */
    function MeController(personService,
                          authService) {
        this._personService = personService;
        this._authService = authService;

        this.getMe();
    }

    MeController.prototype.me = {};

    /**
     * Gets user info from API call
     */
    MeController.prototype.getMe = function () {
        var that = this;
        this._personService.getMe().then(function (me) {
            return (that.me = me.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    MeController.prototype.setLogout = function () {
        this._authService.setLogout();
    };

    angular.module('app').controller('meController', MeController);
}(window.angular));
