/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     * Person controller
     * @constructor
     */
    function PersonController($stateParams) {

            console.log($stateParams);
    };

    angular.module('app').controller('personController', PersonController);

}(window.angular));
