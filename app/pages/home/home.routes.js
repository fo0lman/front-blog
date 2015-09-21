'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.home', {
            url: '/',
            parent: 'frontblog',
            template: require('./home.html'),
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
    ;
}

export default routes;