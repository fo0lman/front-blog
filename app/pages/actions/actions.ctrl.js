'use strict';

export default class ActionsCtrl {
    constructor() {

    }

}

//ActionsCtrl.$inject = [''];

//FrontBlog.controller('ActionFormCtrl', [
//    '$scope',
//    '$location',
//    '$routeParams',
//    '$firebaseObject',
//
//    function ($scope, $location, $routeParams, $firebaseObject) {
//        var editPost = function () {
//            $scope.actionTitle = 'Edit Post';
//
//            var postRef = $scope.ref.child('posts').child(postId);
//
//            $scope.formData = $firebaseObject(postRef);
//
//            $scope.submitForm = function () {
//                $scope.formData.$save().then(function() {
//                    $location.path('/');
//                }, function(error) {
//                    console.log("Error:", error);
//                });
//            };
//        };
//        var addPost = function () {
//            $scope.actionTitle = 'Create Post';
//
//            $scope.formData = {
//                imageUrl: 'img/no-image-available.jpg',
//                title: '',
//                date: (new Date()).getTime(),
//                author: 'admin',
//                keywords: '',
//                description: ''
//            };
//
//            $scope.submitForm = function () {
//                $scope.posts.$add($scope.formData).then(function(ref) {
//                    var id = ref.key();
//                    console.log("added record with id " + id);
//                    $location.path('/');
//                });
//            };
//        };
//        var postId = $routeParams.postId;
//        if (postId) {
//            editPost();
//        } else {
//            addPost();
//        }
//        window.scrollTo(0, 0);
//    }]);