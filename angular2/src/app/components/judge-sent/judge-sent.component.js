/**
 * Created on 14/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

angular
    .module('app')
    .component('appJudgeSent', {
        templateUrl: 'app/components/judge-sent/judge-sent.template.html',
        controller: 'judgeController',
        controllerAs: 'ctrl'
    });
