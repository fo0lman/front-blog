'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.message', {
            url: '/messages/view/:messageId',
            template: require('./message.html'),
            controller: 'MessageCtrl',
            controllerAs: 'message'
        })
    ;
}

export default routes;