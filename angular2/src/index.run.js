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
                        $rootScope.logged = response.status === 'connected';
                    });
                }
            }
        );
    }

    angular.module('app').run(run);

}(window.angular));
