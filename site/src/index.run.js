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


    function cleanCache(isPost) {
        if (isPost) {
            var checkCache = _cache.info();
            angular.forEach(checkCache, function (obj, key) {
                _cache.get(key).removeAll();
            });
        }
    }

    function testInterceptor() {
        return {
            request: function (config) {
                return config;
            },

            requestError: function (config) {
                return config;
            },

            response: function (res) {
                cleanCache(res.data['result'] === 'True');
                return res;
            },

            responseError: function (res) {
                return res;
            }
        }
    }

    angular.module('app')
        .run(run)
        .factory('testInterceptor', testInterceptor)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('testInterceptor');
        });
}(window.angular));
