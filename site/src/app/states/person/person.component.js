/**
 * Created on 13/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appPerson', {
        templateUrl: 'app/states/person/person.template.html',
        controller: 'personController',
        controllerAs: 'ctrl'
    });
