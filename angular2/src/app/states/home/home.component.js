/**
 * Created on 13/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appHome', {
        templateUrl: 'app/states/home/home.template.html',
        controller: 'homeController',
        controllerAs: 'ctrl'
    });
