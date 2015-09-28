'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './contacts.routes';
import ContactsCtrl from './contacts.ctrl';

import pagetitle from '../../modules/page-title.js';
import database from '../../modules/database.js';

var contactsPage = angular.module('contactsPage', [uirouter, pagetitle, database])
    .config(routes)
    .controller('ContactsCtrl', ContactsCtrl)
    .name;

export default contactsPage;