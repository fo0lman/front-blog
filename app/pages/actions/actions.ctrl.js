'use strict';

class ActionsCtrl {
    constructor($scope, $state, $stateParams, $firebaseObject, $firebaseArray) {
        this.scope = $scope;
        this.state = $state;
        this.postId = $stateParams.postId;
        this.firebaseObject = $firebaseObject;
        this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://front-blog.firebaseio.com/");

        if (this.postId) {
            this.editPost();
        } else {
            this.addPost();
        }
    }

    editPost() {
        this.actionTitle = 'Edit Post';
        let postRef = this.ref.child('posts').child(this.postId);
        this.scope.formData = this.firebaseObject(postRef);
    }

    addPost() {
        this.actionTitle = 'Create Post';
        let postsRef = this.ref.child('posts');
        this.posts =  this.firebaseArray(postsRef);
        this.scope.formData = {
            imageUrl: 'assets/img/no-image-available.jpg',
            title: '',
            date: (new Date()).getTime(),
            author: 'admin',
            keywords: '',
            description: ''
        };
    }
    submitForm() {
        if (this.postId) {
            let self = this;
            this.scope.formData.$save().then(function () {
                console.info('SUCCESS EDITING!!!');
                self.state.go('frontblog.home');
            }, function (error) {
                console.log("Error:", error);
            });
        } else {
            let self = this;
            this.posts.$add(this.scope.formData).then(function(ref) {
               var id = ref.key();
                console.log("added record with id " + id);
                self.state.go('frontblog.home');
            });
        }
    }
}

ActionsCtrl.$inject = ['$scope', '$state', '$stateParams', '$firebaseObject', '$firebaseArray'];

export default ActionsCtrl;