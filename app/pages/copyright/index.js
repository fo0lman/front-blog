'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './copyright.routes';
import CopyrightCtrl from './copyright.ctrl';

import pagetitle from '../../modules/page-title.js';

var copyrightPage = angular.module('copyrightPage', [uirouter, pagetitle])
    .config(routes)
    .controller('CopyrightCtrl', CopyrightCtrl)
    .name;

export default copyrightPage;