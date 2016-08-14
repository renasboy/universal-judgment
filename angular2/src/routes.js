angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<app-home></app-home>'
    }).state('person', {
      url: '/person/:id',
      template: '<app-person></app-person>'
  });
}
