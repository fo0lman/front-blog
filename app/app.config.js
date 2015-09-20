'use strict';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('frontblog', {
            views: {
                'header': {
                    template: require('./templates/header.html')
                },
                'content': {
                    template: require('./templates/content.html')
                },
                'sidebar': {
                    template: require('./templates/sidebar.html')
                },
                'footer': {
                    template: require('./templates/footer.html')
                }
            }
        });
}

export default routing;