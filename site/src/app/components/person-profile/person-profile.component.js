/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appPersonProfile', {
        templateUrl: 'app/components/person-profile/person-profile.template.html',
        controller: 'personController',
        controllerAs: 'ctrl'
    });
