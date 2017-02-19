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
                              judgmentsService,
                              metaService,
                              $state,
                              $translate) {
        this.translate = $translate;
        this._personService = personService;
        this._judgmentsService = judgmentsService;
        this._metaService = metaService;
        this.isFormOpen = $state.current.name === 'judge';
        this.personSlug = $stateParams.slug;
        if (this.personSlug) {
            this.getPerson(this.personSlug);
            this.getJudgments(this.personSlug);
        }
        else {
            this.getMe();
        }
    }

    PersonController.prototype.setMetaInfo = function (name) {
        var replacements = {'%NAME%': name};
        if (this.isFormOpen) {
            this._metaService.setTitle(this.translate.instant('JUDGE_TITLE'), replacements);
            this._metaService.setDescription(this.translate.instant('JUDGE_META_DESCRIPTION'), replacements);
            this._metaService.setKeywords(this.translate.instant('JUDGE_META_KEYWORDS'), replacements);
        }
        else {
            this._metaService.setTitle(this.translate.instant('PERSON_TITLE'), replacements);
            this._metaService.setDescription(this.translate.instant('PERSON_META_DESCRIPTION'), replacements);
            this._metaService.setKeywords(this.translate.instant('PERSON_META_KEYWORDS'), replacements);
        }
        this._metaService.appendKeywords(this.translate.instant('KEYWORDS'));
    };

    /**
     *
     * @type {boolean}
     */
    PersonController.prototype.isFormOpen = false;

    PersonController.prototype.person = {};
    PersonController.prototype.judgments = {};

    PersonController.prototype.getMe = function () {
        var that = this;
        this._personService.getMe().then(function (me) {
            that.setMetaInfo(me.data.name);
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
            that.setMetaInfo(person.data.name);
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
