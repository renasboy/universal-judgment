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
    function AuthService($http, $state, Facebook, personService, $rootScope) {
        this._state = $state;
        this._facebook = Facebook;
        this._personService = personService;
        this._rootScope = $rootScope;
        this.$http = $http;
    }

    AuthService.prototype.constants = {
        apiHost: angular.apiHost + '/logout'
    };

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

    AuthService.prototype.removeFacebookCookie = function () {
        document.cookie = 'fbat==;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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

    AuthService.prototype.logout = function () {
        return this.$http.post(this.constants.apiHost);
    };

    AuthService.prototype.setLogout = function () {
        this.removeFacebookCookie();
        this.logout();
        this._rootScope.logged = false;
    };


    angular.module('app')
        .service('authService', AuthService);
}(window.angular));
