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
                              personService,
                              judgmentsService) {
        this._personService = personService;
        this._judgmentsService = judgmentsService;
        // Bootstrap
        var personId = $stateParams.id;
        this.getPerson(personId);
        this.getJudgments(personId);
    }

    PersonController.prototype.person = {};
    PersonController.prototype.judgments = {};

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

    /**
     * Gets user judgment list from API call
     * @param id
     */
    PersonController.prototype.getJudgments = function (id) {
        var that = this;
        this._judgmentsService.getJudgments(id).then(function (judgments) {
            return (that.judgments = judgments.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('personController', PersonController);
}(window.angular));
