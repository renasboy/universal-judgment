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
        this.personSlug = $stateParams.slug;
        if (this.personSlug) {
            this.getPerson(this.personSlug);
            this.getJudgments(this.personSlug);
        }
        else {
            this.getMe();
        }
    }

    PersonController.prototype.person = {};
    PersonController.prototype.judgments = {};

    PersonController.prototype.getMe = function () {
        var that = this;
        this._personService.getMe().then(function (me) {
            return (that.person = me.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    /**
     * Gets user info from API call
     * @param slug
     */
    PersonController.prototype.getPerson = function (slug) {
        var that = this;
        this._personService.getPerson(slug).then(function (person) {
            return (that.person = person.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    /**
     * Gets user judgment list from API call
     * @param slug
     */
    PersonController.prototype.getJudgments = function (slug) {
        var that = this;
        this._judgmentsService.getJudgments(slug).then(function (judgments) {
            return (that.judgments = judgments.data);
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('personController', PersonController);
}(window.angular));
