'use strict';

import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';

class Database {
    constructor($firebaseObject, $firebaseArray, $firebaseAuth) {
        const FIREBASE_URL = 'https://front-blog.firebaseio.com/';

        this.firebaseObject = $firebaseObject;
        this.firebaseArray = $firebaseArray;
        this.firebaseAuth = $firebaseAuth;

        this.rootRef = new Firebase(FIREBASE_URL);
        this.postsRef = this.rootRef.child('posts');
        this.commentsRef = this.rootRef.child('comments');

        this.posts = this.firebaseArray(this.postsRef);
        this.lastPosts = this.firebaseArray(this.postsRef.limitToLast(3));

        this.comments = this.firebaseArray(this.commentsRef);
        this.auth = this.firebaseAuth(this.rootRef);
    }

    getPosts() {
        return this.posts;
    }

    getLastPosts() {
        return this.lastPosts;
    }

    getPost(postId) {
        let postRef = this.postsRef.child(postId);
        this.currentPost = this.firebaseObject(postRef);
        return this.currentPost;
    }


    getComments() {
        return this.comments;
    }

    getComment(CommentId) {
        let CommentRef = this.CommentsRef.child(CommentId);
        this.currentComment = this.firebaseObject(CommentRef);
        return this.currentComment;
    }

    authSocial(provider) {
        this.auth.$authWithOAuthPopup(provider).then(function (authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function (error) {
            console.log("Authentication failed:", error);
        });
    }

    authLogout() {
        this.auth.$unauth();
        console.log('LOGOUT');
    }

    getAuthStatus() {
        let authData = this.rootRef.getAuth();
        return (authData) ? true : false;
    }

    getUserData() {
        let authData = this.rootRef.getAuth();
        switch (authData.provider) {
            case 'password':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.password.email,
                    email: authData.password.email,
                    profileImageURL: authData.password.profileImageURL
                };
            case 'google':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.google.displayName,
                    email: authData.google.email,
                    google_id: authData.google.id,
                    profileImageURL: authData.google.profileImageURL,
                    gender: authData.google.cachedUserProfile.gender,
                    first_name: authData.google.cachedUserProfile.given_name,
                    last_name: authData.google.cachedUserProfile.family_name,
                    link: authData.google.cachedUserProfile.link
                };
            case 'twitter':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.twitter.displayName,
                    twitter_id: authData.twitter.id,
                    profileImageURL: authData.twitter.profileImageURL,
                    username: authData.twitter.username
                };
            case 'facebook':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.facebook.displayName,
                    email: authData.facebook.email,
                    facebook_id: authData.facebook.id,
                    profileImageURL: authData.facebook.profileImageURL,
                    gender: authData.facebook.cachedUserProfile.gender,
                    first_name: authData.facebook.cachedUserProfile.first_name,
                    last_name: authData.facebook.cachedUserProfile.last_name,
                    link: authData.facebook.cachedUserProfile.link
                };
            case 'github':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.github.displayName,
                    email: authData.github.email,
                    github_id: authData.github.id,
                    profileImageURL: authData.github.profileImageURL,
                    username: authData.github.username,
                    link: authData.github.cachedUserProfile.html_url
                };
        }
    }

    // TODO
    //authEmail(email, password, remember){
    //
    //}
    //
    //registerUser(email, password) {
    //
    //}
    //
    //resetUserPassword(email) {
    //
    //}
    //
    //changeUserPassword(email, oldPassword, newPassword) {
    //
    //}
}

Database.$inject = ['$firebaseObject', '$firebaseArray', '$firebaseAuth'];

var databaseModule = angular.module('DatabaseModule', [angularfire])
    .service('$database', Database)
    .name;

export default databaseModule;