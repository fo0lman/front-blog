'use strict';

class BackendCtrl {
    constructor($database) {
        this.database = $database;
        this.authStatus = this.database.getAuthStatus();
    }
    authGoogle() {
        this.database.authSocial('google');
    }
    authFacebook() {
        this.database.authSocial('facebook');
    }
    authTwitter() {
        this.database.authSocial('twitter');
    }
    authGithub() {
        this.database.authSocial('github');
    }
    logout() {
        this.database.authLogout();
    }

    userStatus() {
        console.log(this.database.getAuthStatus());
    }

    userData () {
        console.log(this.database.getUserData());
    }
    //commentsLenght() {
    //    console.log(this.database.getCommentsLenght());
    //}
    //commentsStatus() {
    //    console.log(this.database.getCommentsStatus());
    //}

}

BackendCtrl.$inject=['$database'];

export default BackendCtrl;