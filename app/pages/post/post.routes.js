'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.view', {
            url: '/posts/view/:postId',
            template: require('./post.html'),
            controller: 'PostCtrl',
            controllerAs: 'post'
        });
}