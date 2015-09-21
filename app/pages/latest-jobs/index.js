'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './latest-jobs.routes';
import LatestJobsCtrl from './latest-jobs.ctrl';

var latestJobsPage = angular.module('latestJobsPage', [uirouter])
  .config(routes)
  .controller('LatestJobsCtrl', LatestJobsCtrl)
  .name;

export default latestJobsPage;