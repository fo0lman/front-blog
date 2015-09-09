'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './contacts.routes';
import ContactsCtrl from './contacts.ctrl';

export default angular.module('FrontBlog.contactsPage', [uirouter])
  .config(routing)
  .controller('ContactsCtrl', ContactsCtrl)
  .name;