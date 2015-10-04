'use strict';

import angular from 'angular';

class Pagetitle {
    changeTitle(title) {
        document.querySelector('title').firstChild.nodeValue = title + ' | Фронт блог';
    }
}

var pagetitleModule;
pagetitleModule = angular.module('PagetitleModule', [])
    .service('$pagetitle', Pagetitle)
    .name;

export default pagetitleModule;