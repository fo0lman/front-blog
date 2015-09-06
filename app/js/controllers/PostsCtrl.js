"use strict";

FrontBlog.controller('PostListCtrl', [
    '$scope',
    '$http',
    '$location',
    'usSpinnerService',
    '$firebaseArray',
    '$firebaseAuth',

    function ($scope, $http, $location, usSpinnerService, $firebaseArray, $firebaseAuth) {
        usSpinnerService.spin('spinner');

        $scope.ref = new Firebase("https://front-blog.firebaseio.com/");

        var postsRef = $scope.ref.child('posts');
        $scope.posts = $firebaseArray(postsRef);

        $scope.posts.$loaded(
            function() {
                usSpinnerService.stop('spinner');
            }, function(error) {
                console.error("Error:", error);
            });

        var auth = $firebaseAuth($scope.ref);
        $scope.authFacebook = function () {
            auth.$authWithOAuthPopup("facebook").then(function (authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        };

        $scope.authTwitter = function () {
            auth.$authWithOAuthPopup("twitter").then(function (authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        };

        $scope.authGithub = function () {
            auth.$authWithOAuthPopup("github").then(function (authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        };

        $scope.authGoogle = function () {
            auth.$authWithOAuthPopup("google").then(function (authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        }

    }]);