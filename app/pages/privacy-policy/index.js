'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './privacy-policy.routes';
import PrivacyPolicyCtrl from './privacy-policy.ctrl';

export default angular.module('FrontBlog.privacyPolicyPage', [uirouter])
  .config(routing)
  .controller('PrivacyPolicyCtrl', PrivacyPolicyCtrl)
  .name;