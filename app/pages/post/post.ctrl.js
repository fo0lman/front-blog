"use strict";

class PostCtrl {
    constructor($scope, $stateParams, $firebaseObject, $firebaseArray) {
        this.scope = $scope;
        let ref = new Firebase("https://front-blog.firebaseio.com/");
        let postId = $stateParams.postId;
        let postRef = ref.child('posts').child(postId);
        this.data = $firebaseObject(postRef);
        let commentsRef = ref.child('comments');
        this.comments = $firebaseArray(commentsRef);
        this.scope.commentData = {
            postId: this.data.$id,
            date: (new Date()).getTime(),
            username: '',
            email: '',
            text: ''
        };

    }

    submitComment() {
        this.comments.$add(this.scope.commentData).then(function (ref) {
            var id = ref.key();
            console.log("added comment with id " + id);
        });
    };
}

PostCtrl.$inject = ['$scope', '$stateParams', '$firebaseObject', '$firebaseArray'];

export default PostCtrl;