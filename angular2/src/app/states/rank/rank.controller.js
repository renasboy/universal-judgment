/**
 * Created on 13/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * The home page controller
     * @param {HeavenHellAPI} heavenHellAPI
     * @constructor
     */
    function RankController($stateParams,
                            peopleService,
                            Facebook,
                            $scope,
                            authService,
                            $state) {

        this._peopleService = peopleService;
        this.state = $state;
        this._authService = authService;
        this.isSearchOpen = $state.current.name === 'rank';
        var rank = $stateParams.rank;
        console.log(rank);
        this.getPeople(rank);
    }

    /**
     *
     * @type {Array}
     */
    RankController.prototype.people = [];

    /**
     *
     * @type {boolean}
     */
    RankController.prototype.isSearchOpen = false;


    RankController.prototype.getPeople = function (rank) {
        var that = this;

        this._peopleService.getRank(rank).then(function (data) {
            return (that.people = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    angular.module('app').controller('rankController', RankController);
}(window.angular));
