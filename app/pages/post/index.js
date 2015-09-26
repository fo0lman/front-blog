'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './post.routes';
import PostCtrl from './post.ctrl';

import database from '../../modules/database';
import pagetitle from '../../modules/page-title.js';

var postPage = angular.module('postPage', [uirouter, database, pagetitle])
    .config(routes)
    .controller('PostCtrl', PostCtrl)
    .name;

export default postPage;