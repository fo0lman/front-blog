"use strict";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/assets/css/gfonts.css';
import '../app/assets/css/style.css';
import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-i18n/angular-locale_ru-ua'

import home from './pages/home/index';
import about from './pages/about/index';
import actions from './pages/actions/index';
import contacts from './pages/contacts/index';
import projects from './pages/projects/index';
import post from './pages/post/index';
import privacyPolicy from './pages/privacy-policy/index';
import backend from './pages/backend/index';
import search from './pages/search/index';
import tags from './pages/tags/index';
import message from './pages/message/index';

import routes from './app.config';
import AppCtrl from './app.ctrl';

import database from './modules/database.js';

var frontBlog = angular.module('FrontBlog', [uirouter, home, about, actions, contacts, projects, post, privacyPolicy, backend, search, tags, database, message])
    .config(routes)
    .controller('AppCtrl', AppCtrl)
    .name;

export default frontBlog;