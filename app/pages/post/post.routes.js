'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.view', {
            url: '/post/view/:postId',
            views: {
                'content@': { template: require('./post.html') }

            }
           ,
            controller: 'PostCtrl',
            controllerAs: 'post'
        });
}