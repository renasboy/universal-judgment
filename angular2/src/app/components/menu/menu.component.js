/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appMenu', {
        templateUrl: 'app/components/menu/menu.template.html',
        controller: 'menuController',
        controllerAs: 'ctrl'
    });
