'use strict';

angular.module('heavenHell.me', ['facebook']).

config([
    'FacebookProvider',
    function(FacebookProvider) {
        var myAppId = '102249586831361';
        FacebookProvider.init(myAppId);
    }
]).

controller('MeController', function($scope, $q, Facebook) {


        $scope.getFriends = function() {
          FB.api(
              "/me/taggable_friends",
              function (response) {
                if (response && !response.error) {
                  console.log(response.data);
                  $scope.friendsList = response.data;
                } else {
                    console.log('error');
                }
              }
          );
        };
     
        $scope.buildFriends = function() {
            $scope.list = './js/me/list.html';
        };

      $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
          $scope.$apply(function() {
                    $scope.userList = true;
                    $scope.getFriends();
          });
        } else {
          $scope.$apply(function() {

            // Dismiss byebye message after two seconds
            $timeout(function() {
              $scope.byebye = false;
            }, 2000)
          });
        }

      });


        $scope.$watch(function() {
          // This is for convenience, to notify if Facebook is loaded and ready to go.
          return Facebook.isReady();
        }, function(newVal) {
            // You might want to use this to disable/show/hide buttons and else
            $scope.facebookReady = true;
            $scope.userList = true;
            $scope.getFriends();
        });


        $scope.getFriendInfo = function(userId) {
          FB.api(
              userId,
              function (response) {
                if (response && !response.error) {
                  console.log(response);
                  $scope.friendInfo = response;
                } else {
                    console.log('error');
                }
              }
          );
        };


});
