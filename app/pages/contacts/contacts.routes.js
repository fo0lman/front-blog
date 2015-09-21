'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.contacts', {
            url: '/contacts',
            template: require('./contacts.html'),
            controller: 'ContactsCtrl',
            controllerAs: 'contacts'
        })
    ;
}

export default routes;