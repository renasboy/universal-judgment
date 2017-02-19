(function (angular) {
    'use strict';

    function config(FacebookProvider, $httpProvider, $translateProvider) {
        FacebookProvider.init('993028097483020');

        $httpProvider.defaults.cache = true;

        $translateProvider.translations('en', {
            UNIVERSAL_JUDGMENT: 'Universal Judgment',
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
            TOP: 'Most judged',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Judge before you get judged.',
            HOME_META_KEYWORKDS: 'universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            RANK_TITLE: 'Universal Judgment - Ranking - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% Universal Judgment Ranking',
            RANK_META_KEYWORKDS: '%RANK%, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            SEARCH_TITLE: 'Universal Judgment - Search',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking',
            SEARCH_META_KEYWORKDS: 'search, find, discover, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            PERSON_TITLE: '%NAME%\'s Profile at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile at Universal Judgment, see what others think about %NAME%.',
            PERSON_META_KEYWORKDS: '%NAME%, %NAME% profile, profile, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            JUDGE_TITLE: 'Judge %NAME% at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgement form at Universal Judgment, share your opinion and experience about %NAME%.',
            JUDGE_META_KEYWORKDS: '%NAME%, judge %NAME%, form, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
        });
        $translateProvider.translations('it', {
            UNIVERSAL_JUDGMENT: 'Giudizio Universale',
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
            TOP: 'I più giudicati',
            HOME_TITLE: 'Giudizio Universale - La prima rete anti-social',
            HOME_META_DESCRIPTION: 'Giudizio Universale è veramente la prima rete anti-social su internet, online dal 2007. Giudica prima di essere giudicato.',
            HOME_META_KEYWORKDS: 'giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
            RANK_TITLE: 'Giudizio Universale - Classifica - %RANK%',
            RANK_META_DESCRIPTION: 'Giudizio Universale Classifica del %RANK%',
            RANK_META_KEYWORKDS: '%RANK%, giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
            SEARCH_TITLE: 'Giudizio Universale - Ricerca',
            SEARCH_META_DESCRIPTION: 'Ricerca la classifica del Giudizio Universale',
            SEARCH_META_KEYWORKDS: 'ricerca, trova, scopri, giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
            PERSON_TITLE: 'Profilo di %NAME%\'s su Giudizio Universale',
            PERSON_META_DESCRIPTION: 'Profile personale di %NAME%\'s su Giudizio Universale, scopri cosa dicono gli altri a rispetto di %NAME%.',
            PERSON_META_KEYWORKDS: '%NAME%, profilo, valutazione, commenti, recensione, giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
            JUDGE_TITLE: 'Giudica %NAME% su Giudizio Universale',
            JUDGE_META_DESCRIPTION: 'Modulario di giudizio di %NAME%, condividi le tue opinione e sperienza a rispetto di %NAME%.',
            JUDGE_META_KEYWORKDS: '%NAME%, giudica %NAME%, form, modulario, valutazione, commenti, giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
        });
        $translateProvider.translations('pt', {
            UNIVERSAL_JUDGMENT: 'Ju&iacute;zo Universal',
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
            TOP: 'Mais julgados',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Judge before you get judged.',
            HOME_META_KEYWORKDS: 'universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            RANK_TITLE: 'Universal Judgment - Ranking - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% Universal Judgment Ranking',
            RANK_META_KEYWORKDS: '%RANK%, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            SEARCH_TITLE: 'Universal Judgment - Search',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking',
            SEARCH_META_KEYWORKDS: 'search, find, discover, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            PERSON_TITLE: '%NAME%\'s Profile at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile at Universal Judgment, see what others think about %NAME%.',
            PERSON_META_KEYWORKDS: '%NAME%, %NAME% profile, profile, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            JUDGE_TITLE: 'Judge %NAME%\'s at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgement form at Universal Judgment, share your opinion and experience about %NAME%.',
            JUDGE_META_KEYWORKDS: '%NAME%, judge %NAME%, form, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
        });
        $translateProvider.translations('in', {
            UNIVERSAL_JUDGMENT: 'Universal Judgment',
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
            TOP: 'Most judged',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Judge before you get judged.',
            HOME_META_KEYWORKDS: 'universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            RANK_TITLE: 'Universal Judgment - Ranking - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% Universal Judgment Ranking',
            RANK_META_KEYWORKDS: '%RANK%, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            SEARCH_TITLE: 'Universal Judgment - Search',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking',
            SEARCH_META_KEYWORKDS: 'search, find, discover, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            PERSON_TITLE: '%NAME%\'s Profile at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile at Universal Judgment, see what others think about %NAME%.',
            PERSON_META_KEYWORKDS: '%NAME%, %NAME% profile, profile, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            JUDGE_TITLE: 'Judge %NAME%\'s at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgement form at Universal Judgment, share your opinion and experience about %NAME%.',
            JUDGE_META_KEYWORKDS: '%NAME%, judge %NAME%, form, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
        });
        $translateProvider.translations('cn', {
            UNIVERSAL_JUDGMENT: 'Universal Judgment',
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
            TOP: '最評判',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Judge before you get judged.',
            HOME_META_KEYWORKDS: 'universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            RANK_TITLE: 'Universal Judgment - Ranking - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% Universal Judgment Ranking',
            RANK_META_KEYWORKDS: '%RANK%, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            SEARCH_TITLE: 'Universal Judgment - Search',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking',
            SEARCH_META_KEYWORKDS: 'search, find, discover, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            PERSON_TITLE: '%NAME%\'s Profile at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile at Universal Judgment, see what others think about %NAME%.',
            PERSON_META_KEYWORKDS: '%NAME%, %NAME% profile, profile, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            JUDGE_TITLE: 'Judge %NAME%\'s at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgement form at Universal Judgment, share your opinion and experience about %NAME%.',
            JUDGE_META_KEYWORKDS: '%NAME%, judge %NAME%, form, evaluation, comments, universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
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
