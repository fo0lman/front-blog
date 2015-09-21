'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './contacts.routes';
import ContactsCtrl from './contacts.ctrl';

var contactsPage = angular.module('contactsPage', [uirouter])
  .config(routes)
  .controller('ContactsCtrl', ContactsCtrl)
  .name;

export default contactsPage;