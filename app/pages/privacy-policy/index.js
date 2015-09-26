'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './privacy-policy.routes';
import PrivacyPolicyCtrl from './privacy-policy.ctrl';

import pagetitle from '../../modules/page-title.js';

var privacyPolicyPage = angular.module('privacyPolicyPage', [uirouter, pagetitle])
    .config(routes)
    .controller('PrivacyPolicyCtrl', PrivacyPolicyCtrl)
    .name;

export default privacyPolicyPage;