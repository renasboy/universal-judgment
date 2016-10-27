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
     * @param {EventDispatcherFactory} eventDispatcherFactory
     * @constructor
     */
    function JudgeSentController($stateParams,
                                 personService,
                                 eventDispatcherFactory) {
        this.$stateParams = $stateParams;
        this._personService = personService;
        this._eventDispatcher = eventDispatcherFactory.make();

        // Bootstrap
        this.personTotalScore();

        this.listenScoreChange(this.personTotalScore.bind(this));
    }

    /**
     *
     * @type {{}}
     */
    JudgeSentController.prototype.constants = {
        PERSON_SCORE: 'personScore'
    };

    JudgeSentController.prototype.listenScoreChange = function (listener) {
        return this._eventDispatcher.listen(this.constants.PERSON_SCORE, listener);
    };

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
