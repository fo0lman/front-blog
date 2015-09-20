'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './post.routes';
import PostCtrl from './post.ctrl';

import Firebase from 'firebase';
import angularfire from 'angularfire';

export default angular.module('FrontBlog.postPage', [uirouter, angularfire])
    .config(routes)
    .controller('PostCtrl', PostCtrl)
    .name;