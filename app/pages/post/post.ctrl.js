"use strict";

class PostCtrl {
    constructor($scope, $stateParams, $database) {
        this.scope = $scope;

        let postId = $stateParams.postId;
        this.data = $database.getPost(postId);

        this.comments = $database.getComments();
        this.allComments = $database.getComments();

        let self = this;
        let postComments = [];

        this.comments.$loaded().then(function() {
            self.comments.forEach(function(comment) {
                if (comment.postId === postId) {
                    postComments.push(comment);
                }
            });
            self.comments = postComments;
        });

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
        this.allComments.$add(this.scope.commentData).then(function (ref) {
            var id = ref.key();
            console.log("added comment with id " + id);
        });
    };

    getComentsLenght() {
        return this.comments.length;
    }

}

PostCtrl.$inject = ['$scope', '$stateParams', '$database'];

export default PostCtrl;