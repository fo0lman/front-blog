'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './actions.routes';
import ActionsCtrl from './actions.ctrl';

import pagetitle from '../../modules/page-title.js';

var actionsPage = angular.module('actionsPage', [uirouter, pagetitle])
    .config(routes)
    .controller('ActionsCtrl', ActionsCtrl)
    .name;

export default actionsPage;