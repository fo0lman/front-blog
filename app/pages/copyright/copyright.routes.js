'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.copyright', {
            url: '/copyright',
            template: require('./copyright.html'),
            controller: 'CopyrightCtrl',
            controllerAs: 'copyright'
        })
    ;
}

export default routes;