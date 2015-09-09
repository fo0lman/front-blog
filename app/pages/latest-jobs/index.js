'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './latest-jobs.routes';
import LatestJobsCtrl from './latest-jobs.ctrl';

export default angular.module('FrontBlog.latestJobsPage', [uirouter])
  .config(routing)
  .controller('LatestJobsCtrl', LatestJobsCtrl)
  .name;