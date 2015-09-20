'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('frontblog.privacy-policy', {
            url: '/privacy-policy',
            template: require('./privacy-policy.html'),
            controller: 'PrivacyPolicyCtrl',
            controllerAs: 'privacyPolicy'
        });
}