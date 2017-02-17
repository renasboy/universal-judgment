(function (angular) {
    'use strict';

    var _cache = {};

    function run($rootScope, authService, Facebook, $cacheFactory) {

        _cache = $cacheFactory;

        $rootScope.$watch(
            function () {
                return Facebook.isReady();
            },
            function (newVal) {
                if (newVal) {
                    authService.isFacebookConnected().then(function (response) {
                        authService.handleFacebookLogin(response);
                    });
                }
            }
        );
    }

    angular.module('app')
        .run(run);
}(window.angular));
