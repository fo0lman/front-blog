'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.projects', {
            url: '/projects',
            template: require('./projects.html'),
            controller: 'ProjectsCtrl',
            controllerAs: 'projects'
        })
    ;
}

export default routes;