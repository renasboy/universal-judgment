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
                             judgementService) {
        this.$stateParams = $stateParams;
        this._qualitiesService = qualitiesService;
        this._judgementService = judgementService;

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
        that._judgementService.sendJudgment(personData).then(function () {
            that.judgementWasSent();
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

    JudgeController.prototype.judgementWasSent = function () {
        var that = this;
        that.judgeSent = true;
        that.blur = 'blur';
        that.personTotalScore();
    };

    JudgeController.prototype.personTotalScore = function () {
        var that = this;
        var totalScore = 0;
        var qualitiesLength = that.setQualities().length;

        angular.forEach(that.setQualities(), function (value) {
            totalScore = (totalScore += value.score);
        });
        var finalScore = totalScore / qualitiesLength;
        that.total = finalScore;
    };

    angular.module('app').controller('judgeController', JudgeController);
}(window.angular));
