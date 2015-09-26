'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './about.routes.js';
import AboutCtrl from './about.ctrl.js';

import pagetitle from '../../modules/page-title.js';

var aboutPage = angular.module('aboutPage', [uirouter, pagetitle])
    .config(routes)
    .controller('AboutCtrl', AboutCtrl)
    .name;

export default aboutPage;