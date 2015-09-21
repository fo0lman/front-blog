'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.backend', {
            url: '/backend',
            template: require('./backend.html'),
            controller: 'BackendCtrl',
            controllerAs: 'backend'
        })
    ;
}

export default routes;