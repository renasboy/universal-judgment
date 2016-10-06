angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<app-home></app-home>'
        })
        .state('person', {
            url: '/person/:id',
            template: '<app-person></app-person>'
        })
        .state('judge', {
            url: '/judge/:id',
            template: '<app-judge></app-judge>'
        })
        .state('me', {
            url: '/me',
            template: '<app-me></app-me>'
        });
}

