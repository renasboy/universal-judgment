/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appPersonProfileName', {
        templateUrl: 'app/components/person-profile/person-name/person-name.template.html',
        controller: 'personController',
        controllerAs: 'ctrl'
    });
