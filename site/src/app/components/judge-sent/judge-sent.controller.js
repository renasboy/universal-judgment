(function (angular) {
    'use strict';

    /**
     * Person controller
     * @param {Object} $stateParams
     * @param {PersonService} personService
     * @constructor
     */
    function JudgeSentController($stateParams,
                                 personService) {
        this.$stateParams = $stateParams;
        this._personService = personService;

        // Bootstrap
        this.personTotalScore();
    }

    /**
     *
     * @returns {Numeric}
     */
    JudgeSentController.prototype.getPersonId = function () {
        return this.$stateParams.id;
    };

    JudgeSentController.prototype.personTotalScore = function () {
        var that = this;
        this._personService.getPerson(this.getPersonId()).then(function (person) {
            that.personScoreTest = person.data.score;
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('judgeSentController', JudgeSentController);
}(window.angular));
