'use strict';

routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
    $stateProvider
        .state('frontblog.privacy-policy', {
            url: '/privacy-policy',
            template: require('./privacy-policy.html'),
            controller: 'PrivacyPolicyCtrl',
            controllerAs: 'privacyPolicy'
        })
    ;
}

export default routes;