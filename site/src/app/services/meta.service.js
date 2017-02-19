(function (angular) {
    'use strict';

    function MetaService() {}

    MetaService.prototype.title = '';
    MetaService.prototype.description = '';
    MetaService.prototype.keywords = '';

    MetaService.prototype.replacePlaceholders = function (title, replacements) {
        if (!replacements) {
            return title;
        }
        return title.replace(/%\w+%/g, function (placeholder) {
            return replacements[placeholder] || placeholder;
        });
    };

    MetaService.prototype.setTitle = function (title, replacements) {
        title = this.replacePlaceholders(title, replacements);
        this.title = title;
    };

    MetaService.prototype.setDescription = function (description, replacements) {
        description = this.replacePlaceholders(description, replacements);
        this.description = description;
    };

    MetaService.prototype.setKeywords = function (keywords, replacements) {
        keywords = this.replacePlaceholders(keywords, replacements);
        this.keywords = keywords;
    };

    MetaService.prototype.appendKeywords = function (keywords) {
        for (var key in keywords) {
            if (this.keywords === '') {
                this.keywords = keywords[key];
            }
            else {
                this.keywords += ', ' + keywords[key];
            }
        }
    };

    angular.module('app')
        .service('metaService', MetaService);
}(window.angular));
