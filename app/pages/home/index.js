'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home.routes';
import HomeCtrl from './home.ctrl';

import database from '../../modules/database.js';

var homePage = angular.module('homePage', [uirouter, database])
    .config(routes)
    .controller('HomeCtrl', HomeCtrl)
    .name;

export default homePage;