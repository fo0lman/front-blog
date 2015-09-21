'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './backend.routes.js';
import BackendCtrl from './backend.ctrl.js';

import database from '../../modules/database.js';

var backendPage = angular.module('backendPage', [uirouter, database])
    .config(routes)
    .controller('BackendCtrl', BackendCtrl)
    .name;

export default backendPage;