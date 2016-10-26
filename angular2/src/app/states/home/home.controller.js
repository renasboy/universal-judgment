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
    function HomeController(peopleService,
                            Facebook,
                            $scope,
                            authService,
                            $state) {

        this._peopleService = peopleService;
        this.state = $state;
        this._authService = authService;
        this.isSearchOpen = $state.current.name === 'search';
        this.getPeople();
    }

    /**
     *
     * @type {Array}
     */
    HomeController.prototype.people = [];

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

    angular.module('app').controller('homeController', HomeController);
}(window.angular));
