'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './backend.routes.js';
import BackendCtrl from './backend.ctrl.js';

import database from '../../modules/database.js';
import pagetitle from '../../modules/page-title.js';

var backendPage = angular.module('backendPage', [uirouter, database, pagetitle])
    .config(routes)
    .controller('BackendCtrl', BackendCtrl)
    .filter('status', function () {
        return function (input) {
            return input ? 'Прочитано' : 'Новое';
        }
    })
    .name;

export default backendPage;