'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      template: require('./about.html'),
      controller: 'AboutCtrl',
      controllerAs: 'about'
    });
}