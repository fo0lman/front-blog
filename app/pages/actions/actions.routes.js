'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.add', {
            url: '/post/add',
            views: {
                'content@': { template: require('./actions.html') }
            }
            ,
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
        .state('frontblog.edit', {
            url: '/post/edit/:postId',
            views: {
                'content@': { template: require('./actions.html') }
            }
            ,
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
    ;
}