'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.latest-jobs', {
            url: '/latest-jobs',
            views: {
                'content@': { template: require('./latest-jobs.html') }

            }
            ,
            controller: 'LatestJobsCtrl',
            controllerAs: 'latestjobs'
        });
}