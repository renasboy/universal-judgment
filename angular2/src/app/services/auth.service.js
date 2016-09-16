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
    function AuthService($state, Facebook) {
        this.$state = $state;
        this._facebook = Facebook;
    }

    AuthService.prototype.makeFacebookLogin = function () {
        var that = this;

        window.fbAsyncInit = function () {

            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    FB.api('/me', function (response) {
                        var access_token = FB.getAuthResponse()['accessToken'];
                        that.setFacebookCookie(access_token);
                    });
                }
                else if (response.status === 'not_authorized') {
                    console.log('logged in on facebook but has not authorized the app yet');
                }
                else {
                    console.log('not logged in on facebook');
                }
            });
        }
    };


    /**
     * @return{Promise}
     */
    AuthService.prototype.isFacebookConnected = function () {
        var that = this;
        return that._facebook.getLoginStatus(function (response) {});
    };


    AuthService.prototype.listenNeedsValidation = function (listener) {
        return this._eventDispatcher.listen('needValidation', listener);
    };



    AuthService.prototype.setFacebookCookie = function (token) {
        debugger
        var today = new Date();
        var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
        document.cookie = 'fbat=' + token + '; expires=' + expiry + '; path=/;'
    }

    AuthService.prototype.setFacebookLogin = function () {
        var that = this;

        FB.login(function (response) {
            if (response.authResponse) {
                var access_token = response.authResponse.accessToken;
                that.setFacebookCookie(access_token);
                that.$state.reload();
            }
        });
    }

    angular.module('app')
        .service('authService', AuthService);

}(window.angular));
