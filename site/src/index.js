(function (angular) {
    'use strict';

    function config(FacebookProvider, $httpProvider, $translateProvider) {
        FacebookProvider.init('993028097483020');

        $httpProvider.defaults.cache = true;

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
            CANCEL: 'cancel',
            JUDGMENTS: 'Judgments',
            LATEST: 'Latest judged',
            TOP: 'Most judged'
        });
        $translateProvider.translations('it', {
            JUDGE_NOW: 'Giudica',
            SUBMIT: 'Invia',
            DONE: 'Fatto',
            NEW_SCORE: 'Nuovo punteggio',
            WHY: 'Perché questo giudizio è importante per te?',
            APPERANCE: 'APPARENZA',
            INTELLIGENCE: 'INTELLIGENZA',
            HONESTY: 'ONEST&Aacute;',
            PROFESSIONALISM: 'PROFESSIONALIT&Aacute;',
            HELL: 'Inferno',
            HEAVEN: 'Paradiso',
            PURGATORY: 'Purgatorio',
            HOME: 'home',
            SEARCH: 'ricerca',
            RANK: 'rank',
            ME: 'me',
            BACK: 'indietro',
            CANCEL: 'chiudi',
            JUDGMENTS: 'Giudizi',
            LATEST: 'Gli Ultimi giudicati',
            TOP: 'I più giudicati'
        });
        $translateProvider.translations('pt', {
            JUDGE_NOW: 'Julgar',
            SUBMIT: 'Enviar',
            DONE: 'Pronto',
            NEW_SCORE: 'Novos Pontos',
            WHY: 'Porque este ju&iacute;zo &eacute; importante para voc&ecirc;?',
            APPERANCE: 'Apar&ecirc;ncia',
            INTELLIGENCE: 'Inteligencia',
            HONESTY: 'Honestidade',
            PROFESSIONALISM: 'Profissionalismo',
            HELL: 'Inferno',
            HEAVEN: 'Para&iacute;so',
            PURGATORY: 'Purgat&oacute;rio',
            HOME: 'home',
            SEARCH: 'busca',
            RANK: 'rank',
            ME: 'eu',
            BACK: 'voltar',
            CANCEL: 'cancelar',
            JUDGMENTS: 'Julgamentos',
            LATEST: '&Uacute;ltimos julgamentos',
            TOP: 'Mais julgados'
        });
        $translateProvider.translations('in', {
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
            CANCEL: 'cancel',
            JUDGMENTS: 'Judgments',
            LATEST: 'Latest judged',
            TOP: 'Most judged'
        });
        $translateProvider.translations('cn', {
            JUDGE_NOW: '法官現在',
            SUBMIT: '提交',
            DONE: '完成',
            NEW_SCORE: '新分數',
            WHY: '為什麼這個判斷對你很重要?',
            APPERANCE: '外形',
            INTELLIGENCE: '情報',
            HONESTY: '誠實',
            PROFESSIONALISM: '專業',
            HELL: '地獄',
            HEAVEN: '天堂',
            PURGATORY: '煉獄',
            HOME: '家',
            SEARCH: '搜索',
            RANK: '秩',
            ME: '我',
            BACK: '背部',
            CANCEL: '取消',
            JUDGMENTS: '判斷',
            LATEST: '最新判斷',
            TOP: '最評判'
        });
        var langs = ['en', 'it', 'pt', 'cn', 'in'];
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
    angular.apiHost = 'http://test.universaljudgment.com/api';

    angular.module('app', [
        'ui.router',
        'facebook',
        'pascalprecht.translate',
        'ngSanitize',
        'angularLazyImg'
    ]).config(config);
}(window.angular));
