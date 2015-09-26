'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('frontblog', {
            views: {
                'header': {
                    template: require('./templates/header.html'),
                    controller: 'AppCtrl',
                    controllerAs: 'header'
                },
                'content': {
                    template: require('./templates/content.html')
                },
                'sidebar': {
                    template: require('./templates/sidebar.html'),
                    controller: 'AppCtrl',
                    controllerAs: 'sidebar'
                },
                'footer': {
                    template: require('./templates/footer.html'),
                    controller: 'AppCtrl',
                    controllerAs: 'footer'
                }
            }
        });
}

export default routing;