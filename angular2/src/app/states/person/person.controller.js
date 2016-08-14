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
    function PersonController($stateParams,
                              personService) {
        this._personService = personService;
        // Bootstrap
        var personId = $stateParams.id;
        this.getPerson(personId);
    }

    PersonController.prototype.person = {};

    /**
     * Gets user info from API call
     * @param id
     */
    PersonController.prototype.getPerson = function (id) {
        var that = this;
        this._personService.getPerson(id).then(function (person) {
            return (that.person = person.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('personController', PersonController);
}(window.angular));
