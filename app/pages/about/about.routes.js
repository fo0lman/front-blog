'use strict';

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.about', {
            url: '/about',
            views: {
                'content@': { template: require('./about.html') }
            },
            controller: 'AboutCtrl'
        });
}

routes.$inject = ['$stateProvider'];

export {routes};