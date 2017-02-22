(function (angular) {
    angular.module('app').directive('back', [ '$window', '$location', '$rootScope', function ($window, $location, $rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function () {
                    if ($rootScope.navigated) {
                        $window.history.back();
                    }
                    else {
                        $location.path('/');
                    }
                });
            }
        };
    }]);
}(window.angular));
