'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.contacts', {
            url: '/contacts',
            template: require('./contacts.html'),
            controller: 'ContactsCtrl',
            controllerAs: 'contacts'
        });
}