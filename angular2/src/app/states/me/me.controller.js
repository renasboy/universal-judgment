/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * Person controller
     * @param {Object} $stateParams
     * @param {PersonService} personService
     * @constructor
     */
    function MeController($stateParams,
                              personService) {
        this._personService = personService;
        // Bootstrap
        var personId = $stateParams.id;
        this.getMe();
    }

    MeController.prototype.me = {};

    /**
     * Gets user info from API call
     * @param id
     */
    MeController.prototype.getMe = function () {
        var that = this;
        this._personService.getMe().then(function (me) {
            return (that.me = me.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('meController', MeController);
}(window.angular));
