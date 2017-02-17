(function (angular) {
    'use strict';

    /**
     *
     * @param {object} $cacheFactory
     * @return {{response: response}}
     * @constructor
     */
    function InvalidateCacheInterceptorFactory($cacheFactory) {

        return {
            response: function (res) {
                if (res.data['result'] === 'True') {
                    var checkCache = $cacheFactory.info();
                    angular.forEach(checkCache, function (obj, key) {
                        $cacheFactory.get(key).removeAll();
                    });
                }
                return res;
            }
        };
    }

    angular.module('app')
        .factory('invalidateCacheInterceptor', InvalidateCacheInterceptorFactory)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('invalidateCacheInterceptor');
        });
}(window.angular));

