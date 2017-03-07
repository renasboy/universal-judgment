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
                            $translate,
                            $filter) {
        this.translate = $translate;
        this.filter = $filter;
        this._peopleService = peopleService;
        this._authService = authService;
        this._metaService = metaService;
        this.isSearchOpen = $state.current.name === 'search';
        this.getPeople();
        this.getRecommendedPeople();
        this.getLatest();
        this.getTop();
        this.setMetaInfo();
    }

    HomeController.prototype.setMetaInfo = function () {
        if (this.isSearchOpen) {
            this._metaService.setTitle(this.translate.instant('SEARCH_TITLE'));
            this._metaService.setDescription(this.translate.instant('SEARCH_META_DESCRIPTION'));
            this._metaService.setKeywords(this.translate.instant('SEARCH_META_KEYWORDS'));
        }
        else {
            this._metaService.setTitle(this.translate.instant('HOME_TITLE'));
            this._metaService.setDescription(this.translate.instant('HOME_META_DESCRIPTION'));
            this._metaService.setKeywords(this.translate.instant('HOME_META_KEYWORDS'));
        }
        this._metaService.appendKeywords(this.translate.instant('KEYWORDS'));
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

    HomeController.prototype.page = 1;
    HomeController.prototype.itemsPage = 8;
    HomeController.prototype.userSearch = '';
    HomeController.prototype.peopleTmp = [];
    HomeController.prototype.peopleAll = [];
    HomeController.prototype.peoplePage = [];
    HomeController.prototype.addPeopleToPage = function () {
        if (this.userSearch.length === 0) {
            this.people = this.peopleAll.slice(0, this.itemsPage * this.page++);
        }
    };

    HomeController.prototype.searchPeople = function () {
        if (this.userSearch.length) {
            if (!this.peopleTmp) {
                this.peopleTmp = this.people;
            }
            var that = this;
            this.people = this.filter('filter')(this.peopleAll, function(value, index, array) {
                var regexp = new RegExp('^' + that.userSearch, 'i');
                return value.name.match(regexp) !== null;
            });
            var morePeople = this.filter('filter')(this.peopleAll, function(value, index, array) {
                var regexp = new RegExp(' ' + that.userSearch, 'i');
                var notRegexp = new RegExp('^' + that.userSearch, 'i');
                return (value.name.match(notRegexp) === null && value.name.match(regexp) !== null);
            });
            this.people = this.people.concat(morePeople);
        }
        else {
            if (this.peopleTmp) {
                this.people = this.peopleTmp;
                this.peopleTmp = [];
            }
        }
    };

    HomeController.prototype.recommended = [];

    HomeController.prototype.getRecommendedPeople = function () {
        var that = this;

        this._peopleService.getRecommendedPeople(this.translate.preferredLanguage()).then(function (data) {
            return (that.recommended = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    HomeController.prototype.getPeople = function () {
        var that = this;

        this._peopleService.getPeople().then(function (data) {
            that.peopleAll = data.data;
            that.addPeopleToPage();
            return true;
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
