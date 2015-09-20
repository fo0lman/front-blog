'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.about', {
            url: '/about',
            template: require('./about.html'),
            controller: 'AboutCtrl',
            controllerAs: 'about'
        });
}

export default routes;