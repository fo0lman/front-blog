'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.view', {
            url: '/posts/view/:postId',
            template: require('./post.html'),
            controller: 'PostCtrl',
            controllerAs: 'post'
        })
    ;
}

export default routes;