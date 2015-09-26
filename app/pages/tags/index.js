'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './tags.routes';
import TagsCtrl from './tags.ctrl';

import pagetitle from '../../modules/page-title.js';
import database from '../../modules/database.js';

var tagsPage = angular.module('tagsPage', [uirouter, pagetitle, database])
    .config(routes)
    .controller('TagsCtrl', TagsCtrl)
    .name;

export default tagsPage;