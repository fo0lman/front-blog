'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.home', {
            url: '/',
            parent: 'frontblog',
            views: {
                'content@': {template: require('./home.html') }

            }
            ,
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
}