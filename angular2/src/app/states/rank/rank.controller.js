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
    function RankController(peopleService,
                            Facebook,
                            $scope,
                            authService,
                            $state) {

        this._peopleService = peopleService;
        var that = this;
        this.state = $state;
        this._authService = authService;
        this.isSearchOpen = $state.current.name === 'search';

        that.getPeople();
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


    RankController.prototype.getPeople = function () {
        var that = this;

        this._peopleService.getPeople().then(function (data) {
            return (that.people = data.data);
        }).catch(function () {
            throw Error('Get people API is not available');
        });
    };

    angular.module('app').controller('rankController', RankController);
}(window.angular));
