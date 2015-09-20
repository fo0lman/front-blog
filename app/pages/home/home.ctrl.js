'use strict';

class HomeCtrl {
    constructor($firebaseArray, $firebaseAuth) {
        let ref = new Firebase("https://front-blog.firebaseio.com/");
        let postsRef = ref.child('posts');

        this.posts = $firebaseArray(postsRef);
        this.auth = $firebaseAuth(ref);

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

HomeCtrl.$inject=['$firebaseArray', '$firebaseAuth'];

export default HomeCtrl;