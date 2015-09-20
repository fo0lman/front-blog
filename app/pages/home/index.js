'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home.routes';
import HomeCtrl from './home.ctrl';

import Firebase from 'firebase';
import angularfire from 'angularfire';

export default angular.module('homePage', [uirouter, angularfire])
    .config(routes)
    .controller('HomeCtrl', HomeCtrl)
    .name;