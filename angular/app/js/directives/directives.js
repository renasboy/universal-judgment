'use strict';

/*global angular */

angular.module('heavenHell.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (elm) {
            elm.text(version);
        };
    }]);
