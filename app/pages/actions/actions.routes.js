'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('add', {
            url: '/post/add',
            template: require('./actions.html'),
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
        .state('edit', {
            url: '/post/edit/:postId',
            template: require('./actions.html'),
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
    ;
}