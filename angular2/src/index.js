(function (angular) {
    'use strict';

    function config(FacebookProvider) {
        FacebookProvider.init('993028097483020');
    }

    angular.apiHost = 'http://test.universaljudgment.com';

    angular.module('app', [
        'ui.router',
        'facebook'
    ]).config(config);
}(window.angular));
