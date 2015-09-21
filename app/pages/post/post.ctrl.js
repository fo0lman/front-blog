"use strict";

class PostCtrl {
    constructor($scope, $stateParams, $database) {
        this.scope = $scope;
        let ref = new Firebase("https://front-blog.firebaseio.com/");
        let postId = $stateParams.postId;

        this.data = $database.getPost(postId);

        this.comments = $database.getComments();
        this.scope.commentData = {
            postId: this.data.$id,
            date: (new Date()).getTime(),
            username: '',
            email: '',
            text: ''
        };

        this.authStatus = $database.getAuthStatus();
        window.scrollTo(0, 0);
    }

    submitComment() {
        this.comments.$add(this.scope.commentData).then(function (ref) {
            var id = ref.key();
            console.log("added comment with id " + id);
        });
    };
}

PostCtrl.$inject = ['$scope', '$stateParams', '$database'];

export default PostCtrl;