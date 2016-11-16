(function (angular) {
    'use strict';

    function config(FacebookProvider, $translateProvider) {
        FacebookProvider.init('993028097483020');

        $translateProvider.translations('en', {
            JUDGE_NOW: 'Judge Now',
            SUBMIT: 'Submit',
            DONE: 'Done',
            NEW_SCORE: 'New Score',
            WHY: 'Why is this judgment important for you?',
            APPERANCE: 'Apperance',
            INTELLIGENCE: 'Intelligence',
            HONESTY: 'Honesty',
            PROFESSIONALISM: 'Professionalism',
            HELL: 'Hell',
            HEAVEN: 'Heaven',
            PURGATORY: 'Purgatory',
            HOME: 'home',
            SEARCH: 'search',
            RANK: 'rank',
            ME: 'me',
            BACK: 'back',
            CANCEL: 'cancel'
        });
        $translateProvider.translations('it', {
            JUDGE_NOW: 'Giudica',
            SUBMIT: 'Invia',
            DONE: 'Fatto',
            NEW_SCORE: 'Nuovo punteggio',
            WHY: 'Perché questo giudizio è importante per te?',
            APPERANCE: 'Apparenza',
            INTELLIGENCE: 'Intelligenza',
            HONESTY: 'Onesta',
            PROFESSIONALISM: 'Professionalismo',
            HELL: 'Inferno',
            HEAVEN: 'Paradiso',
            PURGATORY: 'Purgatorio',
            HOME: 'home',
            SEARCH: 'ricerca',
            RANK: 'rank',
            ME: 'me',
            BACK: 'torna',
            CANCEL: 'chiude'
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
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }

    // move to gulp config
    angular.apiHost = 'https://universaljudgment.com/api';

    angular.module('app', [
        'ui.router',
        'facebook',
        'pascalprecht.translate',
        'ngSanitize'
    ]).config(config);
}(window.angular));
