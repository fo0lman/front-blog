'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.latest-jobs', {
            url: '/latest-jobs',
            template: require('./latest-jobs.html'),
            controller: 'LatestJobsCtrl',
            controllerAs: 'latestjobs'
        });
}