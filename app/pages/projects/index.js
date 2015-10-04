'use strict';

import './animate.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';

import routes from './projects.routes';
import ProjectsCtrl from './projects.ctrl';
import monthFilter from './month.filter';

import database from '../../modules/database.js';
import pagetitle from '../../modules/page-title.js';

var projectsPage;

projectsPage = angular.module('projectsPage', [uirouter, animate, database, pagetitle])
    .config(routes)
    .controller('ProjectsCtrl', ProjectsCtrl)
    .filter('fixMonth', monthFilter)
    .name;

export default projectsPage;