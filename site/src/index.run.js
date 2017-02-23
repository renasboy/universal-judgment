(function (angular) {
    'use strict';

    function run($rootScope, authService, metaService, Facebook) {

        // check if already navigated to to back button or homepage
        $rootScope.navigated = false;
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.navigated = (from.name && from.name != 'judge');
        }); 

        $rootScope.metaService = metaService;

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
