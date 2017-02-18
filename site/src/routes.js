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
        .state('search', {
            url: '/search',
            template: '<app-home></app-home>'
        })
        .state('person', {
            url: '/person/:slug',
            template: '<app-person></app-person>'
        })
        .state('judge', {
            url: '/judge/:slug',
            template: '<app-judge></app-judge>'
        })
        .state('me', {
            url: '/me',
            template: '<app-me></app-me>'
        })
        .state('rank-menu', {
            url: '/rank',
            template: '<app-rank></app-rank>'
        })
        .state('rank', {
            url: '/rank/{rank:hell|heaven|purgatory}',
            template: '<app-rank></app-rank>'
        });
}

