'use strict';

import wow from 'wow/dist/wow.min.js'

run.$inject = ['$rootScope'];

function run($rootScope) {
    new wow.WOW().init();
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.info('URL changed!!!');
    });
}

export default run;