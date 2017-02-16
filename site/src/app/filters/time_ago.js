(function (angular) {
    angular.module('app').filter('timeago', function () {
        return function (time, local, raw) {
            if (!time) {
                return 'never';
            }

            if (!local) {
                (local = Date.now());
            }

            if (angular.isDate(time)) {
                time = time.getTime();
            } else if (typeof time === 'string') {
                time = new Date(time).getTime();
            }

            if (angular.isDate(local)) {
                local = local.getTime();
            } else if (typeof local === 'string') {
                local = new Date(local).getTime();
            }

            if (typeof time !== 'number' || typeof local !== 'number') {
                return;
            }

            var offset = Math.abs((local - time) / 1000);
            var span = [];
            var MINUTE = 60;
            var HOUR = 3600;
            var DAY = 86400;
            var WEEK = 604800;
            var MONTH = 2629744;
            var YEAR = 31556926;

            if (offset <= MINUTE) {
                span = ['', raw ? 'now' : 'less than a minute'];
            } else if (offset < (MINUTE * 60)) {
                span = [Math.round(Math.abs(offset / MINUTE)), 'min'];
            } else if (offset < (HOUR * 24)) {
                span = [Math.round(Math.abs(offset / HOUR)), 'hr'];
            } else if (offset < (DAY * 7)) {
                span = [Math.round(Math.abs(offset / DAY)), 'day'];
            } else if (offset < (WEEK * 4)) {
                span = [Math.round(Math.abs(offset / WEEK)), 'week'];
            } else if (offset < (MONTH * 12)) {
                span = [Math.round(Math.abs(offset / MONTH)), 'month'];
            } else if (offset < (YEAR * 100)) {
                span = [Math.round(Math.abs(offset / YEAR)), 'year'];
            }

            span[1] += (span[0] === 0 || span[0] > 1) ? 's' : '';
            span = span.join(' ');

            if (raw === true) {
                return span;
            }
            return (time <= local) ? span + ' ago' : 'in ' + span;
        };
    });
}(window.angular));
