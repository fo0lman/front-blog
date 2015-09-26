'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.search', {
            url: '/search/:query',
            template: require('./search.html'),
            controller: 'SearchCtrl',
            controllerAs: 'search'
        })
    ;
}

export default routes;