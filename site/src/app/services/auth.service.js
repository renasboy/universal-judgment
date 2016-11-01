/**
 * Created on 16/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     *
     * @param $state
     * @param Facebook
     * @param personService
     * @param $rootScope
     * @constructor
     */
    function AuthService($state, Facebook, personService, $rootScope) {
        this._state = $state;
        this._facebook = Facebook;
        this._personService = personService;
        this._rootScope = $rootScope;
    }

    AuthService.prototype.isFacebookConnected = function () {
        return this._facebook.getLoginStatus(function (response) {
            return response;
        });
    };

    AuthService.prototype.setFacebookCookie = function (accessToken) {
        var today = new Date();
        var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
        document.cookie = 'fbat=' + accessToken + '; expires=' + expiry + '; path=/;';
    };

    AuthService.prototype.handleFacebookLogin = function (response) {
        if (response.authResponse) {
            var accessToken = response.authResponse.accessToken;
            this.setFacebookCookie(accessToken);
            this._rootScope.logged = true;
        }
    };

    AuthService.prototype.setFacebookLogin = function () {
        var that = this;

        this._facebook.login(function (response) {
            that.handleFacebookLogin(response);
        });
    };

    angular.module('app')
        .service('authService', AuthService);
}(window.angular));
