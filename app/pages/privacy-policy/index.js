'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './privacy-policy.routes';
import PrivacyPolicyCtrl from './privacy-policy.ctrl';

var privacyPolicyPage = angular.module('privacyPolicyPage', [uirouter])
    .config(routes)
    .controller('PrivacyPolicyCtrl', PrivacyPolicyCtrl)
    .name;

export default privacyPolicyPage;