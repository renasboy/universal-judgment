(function (angular) {
    'use strict';

    /**
     *
     * @param FacebookProvider
     */
    function config(FacebookProvider) {
        FacebookProvider.init('993028097483020');
    }

    angular
        .module('app')
        .config(config);
}(window.angular));