/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appPersonProfileImage', {
        templateUrl: 'app/components/person-profile/person-image/person-image.template.html',
        controller: 'personController',
        controllerAs: 'ctrl'
    });
