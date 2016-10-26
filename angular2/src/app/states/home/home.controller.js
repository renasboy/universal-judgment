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
        var that = this;

        this.state = $state;

        this.isSearchOpen = ($state.current.name === 'search') ? true : false;

        $scope.$watch(
            function () {
                return Facebook.isReady();
            },
            function (newVal) {
                if (newVal) {
                    authService.makeFacebookLogin();
                }
                that.getPeople();
            }
        );
    }

    HomeController.prototype.people = [];

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
