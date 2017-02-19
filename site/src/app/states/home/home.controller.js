(function (angular) {
    'use strict';

    /**
     * The home page controller
     * @param {PeopleService} peopleService
     * @param {AuthService} authService
     * @param {object} $state
     * @param {$rootScope} $rootScope
     * @constructor
     */
    function HomeController(peopleService,
                            authService,
                            metaService,
                            $state,
                            $rootScope,
                            $translate) {
        this.translate = $translate;
        this._peopleService = peopleService;
        this._authService = authService;
        this._metaService = metaService;
        this.isSearchOpen = $state.current.name === 'search';
        this.getPeople();
        this.getLatest();
        this.getTop();
        this.setMetaInfo();

        $rootScope.$emit('lazyImg:refresh');
    }

    HomeController.prototype.setMetaInfo = function () {
        if (this.isSearchOpen) {
            this._metaService.setTitle(this.translate.instant('SEARCH_TITLE'));
            this._metaService.setDescription(this.translate.instant('SEARCH_META_DESCRIPTION'));
            this._metaService.setKeywords(this.translate.instant('SEARCH_META_KEYWORKDS'));
        }
        else {
            this._metaService.setTitle(this.translate.instant('HOME_TITLE'));
            this._metaService.setDescription(this.translate.instant('HOME_META_DESCRIPTION'));
            this._metaService.setKeywords(this.translate.instant('HOME_META_KEYWORKDS'));
        }
    };

    /**
     *
     * @type {Array}
     */
    HomeController.prototype.people = [];

    /**
     *
     * @type {Array}
     */
    HomeController.prototype.latest = [];

    /**
     *
     * @type {Array}
     */
    HomeController.prototype.top = [];

    /**
     *
     * @type {boolean}
     */
    HomeController.prototype.isSearchOpen = false;

    HomeController.prototype.getPeople = function () {
        var that = this;

        this._peopleService.getPeople().then(function (data) {
            return (that.people = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    HomeController.prototype.getLatest = function () {
        var that = this;

        this._peopleService.getRank('latest').then(function (data) {
            return (that.latest = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    HomeController.prototype.getTop = function () {
        var that = this;

        this._peopleService.getRank('top').then(function (data) {
            return (that.top = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    angular.module('app').controller('homeController', HomeController);
}(window.angular));
