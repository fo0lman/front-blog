'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './contacts.routes';
import ContactsCtrl from './contacts.ctrl';

import pagetitle from '../../modules/page-title.js';

var contactsPage = angular.module('contactsPage', [uirouter, pagetitle])
    .config(routes)
    .controller('ContactsCtrl', ContactsCtrl)
    .name;

export default contactsPage;