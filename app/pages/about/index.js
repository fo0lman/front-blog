'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './about.routes.js';
import AboutCtrl from './about.ctrl.js';

export default angular.module('aboutPage', [uirouter])
    .config(routes)
    .controller('AboutCtrl', AboutCtrl)
    .name;