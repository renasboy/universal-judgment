(function (angular) {
    'use strict';

    function run($rootScope, authService, Facebook, $state) {

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

    angular.module('app').run(run);

}(window.angular));
