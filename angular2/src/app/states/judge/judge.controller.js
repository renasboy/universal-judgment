/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * Person controller
     * @param {Object} $stateParams
     * @param {QualitiesService} qualitiesService
     * @constructor
     */
    function JudgeController($stateParams,
                             qualitiesService,
                             judgmentService,
                             personService) {
        this.$stateParams = $stateParams;
        this._qualitiesService = qualitiesService;
        this._judgmentService = judgmentService;
        this._personService = personService;

        // Bootstrap
        this.getQualities();
    }

    /**
     *
     * @type {undefined}
     */
    JudgeController.prototype.why = '';

    /**
     *
     * @returns {Numeric}
     */
    JudgeController.prototype.getPersonId = function () {
        return this.$stateParams.id;
    };

    /**
     * Gets user info from API call
     *
     */
    JudgeController.prototype.getQualities = function () {
        var that = this;
        this._qualitiesService.getQualities().then(function (qualities) {
            return (that.qualities = qualities.data);
        }).catch(function () {
            throw Error('Get qualities API is not available');
        });
    };

    /**
     *
     * @returns {Array} Person qualities
     */
    JudgeController.prototype.setQualities = function () {
        var that = this;
        var userQualities = [];
        angular.forEach(that.qualities, function (value) {
            userQualities.push({
                id: value.id,
                score: parseInt(value.score, 10)
            });
        });
        return userQualities;
    };

    /**
     *
     * @param personData
     */
    JudgeController.prototype.sendPersonData = function (personData) {
        var that = this;
        that._judgmentService.sendJudgment(personData).then(function () {
            that.judgmentWasSent();
        }).catch(function () {
            throw Error('Person judgment was not sent');
        });
    };

    JudgeController.prototype.submitForm = function () {
        var that = this;
        var personData = {
            judged: that.getPersonId(),
            qualities: that.setQualities(),
            why: this.why
        };
        this.sendPersonData(personData);
    };

    JudgeController.prototype.judgmentWasSent = function () {
        var that = this;
        that.judgeSent = true;
        that.blur = 'blur';
        that.personTotalScore();
    };

    JudgeController.prototype.personScore = undefined;

    JudgeController.prototype.personTotalScore = function () {
        var that = this;
        this._personService.getPerson(this.getPersonId()).then(function (person) {
            that.personScore = person.data.score;
        }).catch(function () {
            throw Error('Get person API is not available');
        });
    };

    angular.module('app').controller('judgeController', JudgeController);
}(window.angular));
