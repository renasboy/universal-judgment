/**
 * Created on 13/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appJudge', {
        templateUrl: 'app/states/judge/judge.template.html',
        controller: 'judgeController',
        controllerAs: 'ctrl'
    });
