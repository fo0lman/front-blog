'use strict';

export default class HomeCtrl {
    constructor($firebaseArray, $firebaseAuth) {
        //this.$firebaseArray = $firebaseArray;
        //this.$firebaseAuth = $firebaseAuth;
        //let ref = new Firebase("https://front-blog.firebaseio.com/");
        //var postsRef = ref.child('posts');
        //this.posts = this.$firebaseArray(postsRef);
        //this.auth = this.$firebaseAuth(ref);
        console.log('TEST');
    }

    authGoogle() {
        this.auth.$authWithOAuthPopup("google").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    authFacebook() {
        this.auth.$authWithOAuthPopup("facebook").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    authTwitter() {
        this.auth.$authWithOAuthPopup("twitter").then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }
    authGithub() {
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