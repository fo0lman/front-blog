"use strict";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/assets/css/gfonts.css';
import '../app/assets/css/style.css';
import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './pages/home/index';
import about from './pages/about/index';
import actions from './pages/actions/index';
import contacts from './pages/contacts/index';
import latestJobs from './pages/latest-jobs/index';
import post from './pages/post/index';
import privacyPolicy from './pages/privacy-policy/index';
import backend from './pages/backend/index';

import routes from './app.config';
import AppCtrl from './app.ctrl';

import database from './modules/database.js';

var frontBlog = angular.module('FrontBlog', [uirouter, home, about, actions, contacts, latestJobs, post, privacyPolicy, backend, database])
    .config(routes)
    .controller('AppCtrl', AppCtrl)
    .name;

export default frontBlog;