'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './post.routes';
import PostCtrl from './post.ctrl';

export default angular.module('FrontBlog.postPage', [uirouter])
  .config(routing)
  .controller('PostCtrl', PostCtrl)
  .name;