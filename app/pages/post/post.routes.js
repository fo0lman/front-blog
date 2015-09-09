'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('view', {
            url: '/post/view/:postId',
            template: require('./post.html'),
            controller: 'PostCtrl',
            controllerAs: 'post'
        });
}