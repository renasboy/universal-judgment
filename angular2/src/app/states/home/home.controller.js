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
    function HomeController(peopleService) {

        this.peopleService = peopleService;

        //Bootstrap
        this.getPeople();
    };

    HomeController.prototype.people = {};

    HomeController.prototype.getPeople = function () {
        var that = this;
        this.peopleService.getPeople().then(function (data) {
            that.people = data.data;
        }).catch(function () {
            throw Error('Api is not available')
        });
    };

    angular.module('app').controller('homeController', HomeController);

}(window.angular));
