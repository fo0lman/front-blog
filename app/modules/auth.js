'use strict';

import angular from 'angular';
import Firebase from 'firebase';
import angularfire from 'angularfire';

class AuthModule {
    constructor($firebaseAuth) {
        this.$firebaseAuth = $firebaseAuth;
        let ref = new Firebase("https://front-blog.firebaseio.com/");
        this.auth = this.$firebaseAuth(ref);
    }

    google() {
        this.auth.$authWithOAuthPopup("google").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    facebook() {
        this.auth.$authWithOAuthPopup("facebook").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    twitter() {
        this.auth.$authWithOAuthPopup("twitter").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    github() {
        this.auth.$authWithOAuthPopup("github").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    logout() {
        this.auth.$unauth();
    }
}

AuthModule.$inject = ['$firebaseAuth'];

export default angular.module('FrontBlog.AuthModule', [angularfire])
    .service('authModule', AuthModule)
    .name;