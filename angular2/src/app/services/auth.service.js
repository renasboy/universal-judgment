/**
 * Created on 16/08/16.
 * @author Renato Cardoso <re2005@gmail.com>
 */

(function (angular) {
    'use strict';

    /**
     *
     * @param {Object} $state
     */
    function AuthService($state, Facebook, personService) {
        this.$state = $state;
        this._facebook = Facebook;
        this._personService = personService;
        this.logged = false;
    }


    AuthService.prototype.getLoginStatus = function () {
        var that = this;
        return this._facebook.getLoginStatus(function (response) {
            that.logged = response.status === 'connected';
        });
    };

    /**
     * @return{Promise}
     */
    AuthService.prototype.isFacebookConnected = function () {
        return this.logged;
    };

    AuthService.prototype.setFacebookCookie = function (accessToken) {
        var today = new Date();
        var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
        document.cookie = 'fbat=' + accessToken + '; expires=' + expiry + '; path=/;';
    };

    AuthService.prototype.setFacebookLogin = function () {
        var that = this;

        FB.login(function (response) {
            if (response.authResponse) {
                var accessToken = response.authResponse.accessToken;
                that.setFacebookCookie(accessToken);
                that.$state.reload();
            }
        });
    };

    angular.module('app')
        .service('authService', AuthService);
}(window.angular));
