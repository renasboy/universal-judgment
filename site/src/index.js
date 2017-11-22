(function (angular) {
    'use strict';

    function config(FacebookProvider, $httpProvider, $translateProvider) {
        var lang = (navigator.userLanguage ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.systemLanguage);
        FacebookProvider.init('993028097483020');
        FacebookProvider.setLocale(lang);

        $httpProvider.defaults.cache = true;

        $translateProvider.translations('en', {
            UNIVERSAL_JUDGMENT: 'Universal Judgment',
            JUDGE_NOW: 'Judge Now',
            SUBMIT: 'Submit',
            DONE: 'Done',
            NEW_SCORE: 'New Score',
            WHY: 'Why is this judgment important for you? (max. 255 chars.)',
            APPEARANCE: 'Appearance',
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
            NO_JUDGMENTS: 'No judgments yet, be the first to add one!',
            LATEST: 'Latest judged',
            TOP: 'Most judged',
            RECOMMENDED_FOR_YOU: 'Recommended for you!',
            KEYWORDS: 'universal judgment, universal judgement, universal, judgment, judgement, judgments, judgements, judge, anti-social network, anti-social, anti, social, network, ranking, rankings, rank, ranks, rating, ratings, rate, rates, evaluation, evaluations, comment, comments, star, stars, 5 starts, 5stars, the best, the worst, heaven, hell, purgatory, mario barone, renato cavallari, 2007',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Use it to discover who is going where after the final judgement. Paradise, Purgatory or Hell? Where are you going? Judge before you get judged!',
            HOME_META_KEYWORDS: '',
            RANK_TITLE: 'Who is going to %RANK% according to Universal Judgment?',
            RANK_META_DESCRIPTION: '%RANK% ranking at Universal Judgment shows who is going to %RANK% after the final judgment. Where are you going?',
            RANK_META_KEYWORDS: '%RANK%',
            SEARCH_TITLE: 'Search the Universal Judgment ranking database',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking database by entering a search term.',
            SEARCH_META_KEYWORDS: 'search, find, discover',
            PERSON_TITLE: '%NAME%\'s profile page at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile page at Universal Judgment, see what others think about %NAME%. What do you think about %NAME%?',
            PERSON_META_KEYWORDS: '%NAME%, %NAME% profile, profile, profile page, personal page, personal profile',
            JUDGE_TITLE: 'Judge %NAME% now at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgment form at Universal Judgment. Do you have any opinion about %NAME%, any experience with %NAME%, share with us and help others!',
            JUDGE_META_KEYWORDS: '%NAME%, judge %NAME%, form, form page, judgment page, judge now, judge here',
        });
        $translateProvider.translations('it', {
            UNIVERSAL_JUDGMENT: 'Giudizio Universale',
            JUDGE_NOW: 'Giudica',
            SUBMIT: 'Invia',
            DONE: 'Fatto',
            NEW_SCORE: 'Nuovo punteggio',
            WHY: 'Scrivi una recensione (max. 255 carat.)',
            APPEARANCE: 'APPARENZA',
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
            NO_JUDGMENTS: 'Non ci sono ancora giudizi, puoi essere il primo da aggiungere',
            LATEST: 'Gli Ultimi giudicati',
            TOP: 'I più giudicati',
            RECOMMENDED_FOR_YOU: 'Consigliato per te!',
            KEYWORDS: 'giudizio, universale, giudizio universale, anti-social, anti, social, anti-social network, rete anti-social, classifica, classifiche, rating, ratings, rate, valutazione, votazione, punteggio, stars, stelle, i migliori, i peggiori, paradiso, inferno, purgatorio, giuizi, mario barone, renato cavallari',
            HOME_TITLE: 'Giudizio Universale - La prima rete anti-social',
            HOME_META_DESCRIPTION: 'Giudizio Universale è davvero la prima rete anti-social su internet, online dal 2007. Giudica prima di essere giudicato.',
            HOME_META_KEYWORDS: '',
            RANK_TITLE: 'Giudizio Universale - Classifica - %RANK%',
            RANK_META_DESCRIPTION: 'Giudizio Universale Classifica del %RANK%',
            RANK_META_KEYWORDS: '%RANK%',
            SEARCH_TITLE: 'Giudizio Universale - Ricerca',
            SEARCH_META_DESCRIPTION: 'Ricerca la classifica del Giudizio Universale',
            SEARCH_META_KEYWORDS: 'ricerca, trova, scopri',
            PERSON_TITLE: 'Profilo di %NAME%\'s su Giudizio Universale',
            PERSON_META_DESCRIPTION: 'Profile personale di %NAME%\'s su Giudizio Universale, scopri cosa dicono gli altri a rispetto di %NAME%.',
            PERSON_META_KEYWORDS: '%NAME%, profilo, valutazione, commenti, recensione',
            JUDGE_TITLE: 'Giudica %NAME% su Giudizio Universale',
            JUDGE_META_DESCRIPTION: 'Modulario di giudizio di %NAME%, condividi le tue opinione e sperienza a rispetto di %NAME%.',
            JUDGE_META_KEYWORDS: '%NAME%, giudica %NAME%, form, modulario, valutazione, commenti',
        });
        $translateProvider.translations('pt', {
            UNIVERSAL_JUDGMENT: 'Juízo Universal',
            JUDGE_NOW: 'Julgar',
            SUBMIT: 'Enviar',
            DONE: 'Pronto',
            NEW_SCORE: 'Novos Pontos',
            WHY: 'Porque este juízo é importante para você? (max. 255 carat.)',
            APPEARANCE: 'Aparência',
            INTELLIGENCE: 'Inteligencia',
            HONESTY: 'Honestidade',
            PROFESSIONALISM: 'Profissionalismo',
            HELL: 'Inferno',
            HEAVEN: 'Paraíso',
            PURGATORY: 'Purgatório',
            HOME: 'home',
            SEARCH: 'busca',
            RANK: 'rank',
            ME: 'eu',
            BACK: 'voltar',
            CANCEL: 'cancelar',
            JUDGMENTS: 'Julgamentos',
            NO_JUDGMENTS: 'Ainda não existem julgamentos, seja o primeiro a adicionar um!',
            LATEST: 'Últimos julgamentos',
            TOP: 'Mais julgados',
            RECOMMENDED_FOR_YOU: 'Recomendados!',
            KEYWORDS: 'juizo, universal, juizo universao, julgamento, anti-social, anti, social, rede, avaliacao, avaliacoes, estrelas, estrela, o melhor, o pior, paraiso, inferno, purgatorio, julgamentos, mario barone, renato cavallari',
            HOME_TITLE: 'Juízo Universal - A Primeira Rede Anti-Social',
            HOME_META_DESCRIPTION: 'O Juízo Universal é mesmo a primeira rede anti-social da internet, desde 2007 online. Julgue antes de ser julgado.',
            HOME_META_KEYWORDS: '',
            RANK_TITLE: 'Juízo Universal - Ranking - %RANK%',
            RANK_META_DESCRIPTION: 'Quem está no %RANK% de acordo com o Juízo Universal',
            RANK_META_KEYWORDS: '%RANK%',
            SEARCH_TITLE: 'Juízo Universal - Busca',
            SEARCH_META_DESCRIPTION: 'Busque no Ranking do Juízo Universal',
            SEARCH_META_KEYWORDS: 'procure, pesquise, discubra',
            PERSON_TITLE: 'Página do %NAME% no Juízo Universal',
            PERSON_META_DESCRIPTION: 'Página do %NAME% no Juízo Universal, veja o que os outros estão a dizer a respeito de %NAME%.',
            PERSON_META_KEYWORDS: '%NAME%, pagina %NAME%, %NAME% profile, profile, avaliacao, commentario, commentarios',
            JUDGE_TITLE: 'Julgue %NAME% no Juízo Universal',
            JUDGE_META_DESCRIPTION: 'Formulário de julgamento de %NAME% no Juízo Universal, dê a sua opinião e conte a sua experiencia com %NAME%.',
            JUDGE_META_KEYWORDS: '%NAME%, julgue %NAME%, julga %NAME%, form, formulario, avaliacao, avaliacoes, comentario, comentarios, estrela, estrelas',
        });
        $translateProvider.translations('hi', {
            UNIVERSAL_JUDGMENT: 'Universal Judgment',
            JUDGE_NOW: 'Judge Now',
            SUBMIT: 'Submit',
            DONE: 'Done',
            NEW_SCORE: 'New Score',
            WHY: 'Why is this judgment important for you? (max. 255 chars)',
            APPEARANCE: 'Apperance',
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
            NO_JUDGMENTS: 'No judgments yet, be the first to add one!',
            LATEST: 'Latest judged',
            TOP: 'Most judged',
            RECOMMENDED_FOR_YOU: 'Recommended for you!',
            KEYWORDS: 'universal, judgment, universal judgment, universal judgement, judgement, anti-social, anti, social, anti-social network, rating, ratings, rate, stars, the best, the worst, heaven, hell, purgatory, judgments, judgment, mario barone, renato cavallari',
            HOME_TITLE: 'Universal Judgment - The First Anti-Social Network',
            HOME_META_DESCRIPTION: 'Universal Judgment is the very first anti-social network, dating back to 2007. Judge before you get judged.',
            HOME_META_KEYWORDS: '',
            RANK_TITLE: 'Universal Judgment - Ranking - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% Universal Judgment Ranking',
            RANK_META_KEYWORDS: '%RANK%',
            SEARCH_TITLE: 'Universal Judgment - Search',
            SEARCH_META_DESCRIPTION: 'Search the Universal Judgment Ranking',
            SEARCH_META_KEYWORDS: 'search, find, discover',
            PERSON_TITLE: '%NAME%\'s Profile at Universal Judgment',
            PERSON_META_DESCRIPTION: '%NAME%\'s profile at Universal Judgment, see what others think about %NAME%.',
            PERSON_META_KEYWORDS: '%NAME%, %NAME% profile, profile, evaluation, comments',
            JUDGE_TITLE: 'Judge %NAME%\'s at Universal Judgment',
            JUDGE_META_DESCRIPTION: '%NAME%\'s judgment form at Universal Judgment, share your opinion and experience about %NAME%.',
            JUDGE_META_KEYWORDS: '%NAME%, judge %NAME%, form, evaluation, comments',

        });
        $translateProvider.translations('zh', {
            UNIVERSAL_JUDGMENT: '普遍判斷',
            JUDGE_NOW: '法官現在',
            SUBMIT: '提交',
            DONE: '完成',
            NEW_SCORE: '新分數',
            WHY: '為什麼這個判斷對你很重要? (最大255個字符)',
            APPEARANCE: '外形',
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
            NO_JUDGMENTS: '沒有判斷, 是第一個添加一個!',
            LATEST: '最新判斷',
            TOP: '最評判',
            RECOMMENDED_FOR_YOU: '為你推薦',
            KEYWORDS: '普遍的，判斷的，普遍的判斷，普遍的判斷，判斷，反社會，反社會，反社會網絡，評級，評級，率，星星，最好，最壞，天堂，地獄，審判，判斷，判斷',
            HOME_TITLE: '普遍判斷 - 第一反社會網絡',
            HOME_META_DESCRIPTION: '通用判斷是第一個反社會網絡，可追溯到2007年。法官在你得到判斷',
            HOME_META_KEYWORDS: '',
            RANK_TITLE: '普遍判斷 - 排行 - %RANK%',
            RANK_META_DESCRIPTION: '%RANK% 通用判斷排名',
            RANK_META_KEYWORDS: '%RANK%',
            SEARCH_TITLE: '普遍判斷 - 搜索',
            SEARCH_META_DESCRIPTION: '搜索普遍判斷排名',
            SEARCH_META_KEYWORDS: '搜索，查找，發現',
            PERSON_TITLE: '%NAME%在普遍判斷的概況',
            PERSON_META_DESCRIPTION: '%NAME%在普遍判斷的概況, 看看別人對%NAME%的看法.',
            PERSON_META_KEYWORDS: '%NAME%, %NAME%的個人資料, 簡介，評價，評論',
            JUDGE_TITLE: '法官%NAME%在普遍判斷',
            JUDGE_META_DESCRIPTION: '%NAME%在普遍判決中的判決形式, 分享您對%NAME%的意見和經驗.',
            JUDGE_META_KEYWORDS: '%NAME%, 法官%NAME%, 形式，評價，評論',
        });
        var langs = ['en', 'it', 'pt', 'zh', 'hi'];
        var lang = (navigator.userLanguage ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.systemLanguage).split('-')[0];
        if (langs.indexOf(lang) === -1) {
            lang = langs[0];
        }
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useSanitizeValueStrategy(null);
    }

    // move to gulp config
    angular.apiHost = 'http://test.universaljudgment.com/api';

    angular.module('app', [
        'ui.router',
        'facebook',
        'pascalprecht.translate',
        'ngSanitize',
        'infinite-scroll'
    ]).config(config);
}(window.angular));
