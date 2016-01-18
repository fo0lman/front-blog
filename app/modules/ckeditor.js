'use strict';

import angular from 'angular';
import ckeditor from '../../node_modules/ckeditor/ckeditor.js';

console.log(ckeditor);

class CKEditor {
    constructor() {

    }
}

//CKEditor.$inject = [''];

var ckeditorModule;
ckeditorModule = angular.module('ckeditorModule', [])
    .service('$ckeditor', CKEditor)
    .name;

export default ckeditorModule;