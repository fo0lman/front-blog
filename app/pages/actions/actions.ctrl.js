'use strict';

class ActionsCtrl {
    constructor($scope, $state, $stateParams, $database, $pagetitle) {
        this.scope = $scope;
        this.state = $state;
        this.postId = $stateParams.postId;
        this.database = $database;

        if (this.postId) {
            $pagetitle.changeTitle('Редактировать пост');
            this.editPost();
        } else {
            $pagetitle.changeTitle('Создать пост');
            this.addPost();
        }
    }

    editPost() {
        this.actionTitle = 'Редактировать пост';
        this.scope.formData = this.database.getPost(this.postId);
    }

    addPost() {
        this.actionTitle = 'Создать пост';
        this.posts =  this.database.getPosts();
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
            let keywords = this.scope.formData.keywords;

            keywords = keywords.split(/[^\w-]+/).join(' ');

            this.scope.formData.keywords = keywords;

            this.scope.formData.$save().then(function () {
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

ActionsCtrl.$inject = ['$scope', '$state', '$stateParams', '$database', '$pagetitle'];

export default ActionsCtrl;