(function (angular) {
    angular.module('app').filter('score', function () {
        return function (score) {
            return Math.floor(score/0.80);
        };
    });
}(window.angular));
