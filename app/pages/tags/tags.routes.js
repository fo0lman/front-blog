'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.tags', {
            url: '/tags/:tag',
            template: require('./tags.html'),
            controller: 'TagsCtrl',
            controllerAs: 'tags'
        })
    ;
}

export default routes;