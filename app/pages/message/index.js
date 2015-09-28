'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './message.routes';
import MessageCtrl from './message.ctrl';

import database from '../../modules/database';
import pagetitle from '../../modules/page-title.js';

var messagePage = angular.module('messagePage', [uirouter, database, pagetitle])
    .config(routes)
    .controller('MessageCtrl', MessageCtrl)
    .name;

export default messagePage;