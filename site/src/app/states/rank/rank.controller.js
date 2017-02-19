(function (angular) {
    'use strict';

    /**
     * The home page controller
     * @param $stateParams
     * @param peopleService
     * @param authService
     * @param $state
     * @constructor
     */
    function RankController($stateParams,
                            peopleService,
                            authService,
                            metaService,
                            $state,
                            $translate,
                            $filter) {
        this.state = $state;
        this.translate = $translate;
        this.filter = $filter;
        this._peopleService = peopleService;
        this._authService = authService;
        this._metaService = metaService;
        this.rank = $stateParams.rank;
        this.getPeople(this.rank);
        this.setMetaInfo(this.rank);
    }

    RankController.prototype.setMetaInfo = function (rank) {
        var replacements = {'%RANK%': this.translate.instant(this.filter('uppercase')(rank))};
        this._metaService.setTitle(this.translate.instant('RANK_TITLE'), replacements);
        this._metaService.setDescription(this.translate.instant('RANK_META_DESCRIPTION'), replacements);
        this._metaService.setKeywords(this.translate.instant('RANK_META_KEYWORKDS'), replacements);
    };

    /**
     *
     * @type {Array}
     */
    RankController.prototype.people = [];

    /**
     *
     * @param rank
     */
    RankController.prototype.getPeople = function (rank) {
        var that = this;

        this._peopleService.getRank(rank).then(function (data) {
            return (that.people = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    RankController.prototype.isActive = function (menuName) {
        var that = this;
        var menu = menuName.split(',');
        var menuIsActive = '';
        angular.forEach(menu, function (menuItem) {
            if (menuIsActive === '') {
                menuIsActive = (menuItem === that.menuActive) ? 'active' : '';
            }
        });
        return menuIsActive;
    };

    angular.module('app').controller('rankController', RankController);
}(window.angular));
