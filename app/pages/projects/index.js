'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './projects.routes';
import ProjectsCtrl from './projects.ctrl';

import database from '../../modules/database.js';
import pagetitle from '../../modules/page-title.js';

var projectsPage = angular.module('projectsPage', [uirouter, database, pagetitle])
    .config(routes)
    .controller('ProjectsCtrl', ProjectsCtrl)
    .name;

export default projectsPage;