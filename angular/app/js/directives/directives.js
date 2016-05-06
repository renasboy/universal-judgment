'use strict';

/*global angular */

angular.module('heavenHell.directives', [])
    .directive('appVersion', ['version', function (version) {
        return function (elm) {
            elm.text(version);
        };
    }])

    .directive('testclick', function () {
        return {
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    console.log('re', scope, attrs);
                });
            }
        };
    });
