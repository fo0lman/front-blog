'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeCtrl from './home.ctrl';

import Firebase from 'firebase';
import angularfire from 'angularfire';

export default angular.module('FrontBlog.homePage', [uirouter, angularfire])
    .config(routing)
    .controller('HomeCtrl', HomeCtrl)
    .name;