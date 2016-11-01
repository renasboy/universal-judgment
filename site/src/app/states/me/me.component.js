/**
 * Created on 13/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appMe', {
        templateUrl: 'app/states/me/me.template.html',
        controller: 'meController',
        controllerAs: 'ctrl'
    });
