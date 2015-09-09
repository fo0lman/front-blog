'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './actions.routes';
import ActionsCtrl from './actions.ctrl';

export default angular.module('FrontBlog.actionsPage', [uirouter])
  .config(routing)
  .controller('ActionsCtrl', ActionsCtrl)
  .name;