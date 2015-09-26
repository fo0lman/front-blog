"use strict";

class PostCtrl {
    constructor($scope, $stateParams, $database, $pagetitle) {
        this.scope = $scope;
        this.database = $database;

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


        let titleArray = [];
        this.data.$loaded().then(function() {
            self.data.forEach(function(data) {
                titleArray.push(data);
            });

            $pagetitle.changeTitle(titleArray[5]);
        });
    }

    submitComment() {
        let self = this;
        this.allComments.$add(this.scope.commentData).then(function (ref) {
            var id = ref.key();
            console.log("added comment with id " + id);
            self.database.reloadPage();
        });
    };

    getComentsLenght() {
        return this.comments.length;
    }

}

PostCtrl.$inject = ['$scope', '$stateParams', '$database', '$pagetitle'];

export default PostCtrl;