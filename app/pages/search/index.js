'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './search.routes';
import SearchCtrl from './search.ctrl';

import pagetitle from '../../modules/page-title.js';
import database from '../../modules/database.js';

var searchPage = angular.module('searchPage', [uirouter, pagetitle, database])
    .config(routes)
    .controller('SearchCtrl', SearchCtrl)
    .name;

export default searchPage;