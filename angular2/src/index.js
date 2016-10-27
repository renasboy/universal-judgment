(function (angular) {
    'use strict';

    function config(FacebookProvider, $translateProvider) {
        FacebookProvider.init('993028097483020');

        $translateProvider.translations('en', {
            JUDGE_NOW: 'Judge Now',
            SUBMIT: 'Submit',
            DONE: 'Done',
            NEW_SCORE: 'New Score',
            WHY: 'Why?',
            APPERANCE: 'Apperance',
            INTELLIGENCE: 'Intelligence',
            HONESTY: 'Honesty',
            PROFESSIONALISM: 'Professionalism'
        });
        $translateProvider.translations('it', {
            JUDGE_NOW: 'Giudica',
            SUBMIT: 'Invia',
            DONE: 'Fatto',
            NEW_SCORE: 'Nuovo punteggio',
            WHY: 'Perche?',
            APPERANCE: 'Apparenza',
            INTELLIGENCE: 'Intelligenza',
            HONESTY: 'Onesta',
            PROFESSIONALISM: 'Professionalismo'
        });
        var langs = ['en', 'it'];
        var lang = (navigator.userLanguage ||
                    navigator.language ||
                    navigator.browserLanguage ||
                    navigator.systemLanguage).split('-')[0];
        if (langs.indexOf(lang) === -1) {
            lang = langs[0];
        }
        $translateProvider.preferredLanguage(lang);
        // $translateProvider.useSanitizeValueStrategy('sanitize');
    }

    // move to gulp config
    angular.apiHost = 'http://test.universaljudgment.com';

    angular.module('app', [
        'ui.router',
        'facebook',
        'pascalprecht.translate'
    ]).config(config);
}(window.angular));
