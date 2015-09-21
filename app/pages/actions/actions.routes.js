'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.add', {
            url: '/posts/add',
            template: require('./actions.html'),
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
        .state('frontblog.edit', {
            url: '/posts/edit/:postId',
            template: require('./actions.html'),
            controller: 'ActionsCtrl',
            controllerAs: 'actions'
        })
    ;
}

export default routes;