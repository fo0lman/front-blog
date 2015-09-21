'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './actions.routes';
import ActionsCtrl from './actions.ctrl';

var actionsPage = angular.module('actionsPage', [uirouter])
  .config(routes)
  .controller('ActionsCtrl', ActionsCtrl)
  .name;

export default actionsPage;