'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './about.routes';
import AboutCtrl from './about.ctrl';

export default angular.module('FrontBlog.aboutPage', [uirouter])
  .config(routing)
  .controller('AboutCtrl', AboutCtrl)
  .name;