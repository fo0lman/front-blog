"use strict";

FrontBlog.controller('PostDetailCtrl', [
    '$scope',
    '$routeParams',
    '$firebaseObject',
    '$firebaseArray',

    function ($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var postId = $routeParams.postId;
        var postRef = $scope.ref.child('posts').child(postId);

        $scope.post = $firebaseObject(postRef);

        var commentsRef = $scope.ref.child('comments');

        $scope.comments = $firebaseArray(commentsRef);

        $scope.commentData = {
            postId: $scope.post.$id,
            date: (new Date()).getTime(),
            username: '',
            email: '',
            text: ''
        };

        $scope.submitComment = function () {
            $scope.comments.$add($scope.commentData).then(function (ref) {
                var id = ref.key();
                console.log("added comment with id " + id);
            });
        };

        window.scrollTo(0, 0);

    }]);