'use strict';

class HomeCtrl {
    constructor($scope, $database, $pagetitle) {
        this.scope = $scope;
        this.database = $database;
        this.posts = this.database.getPosts();
        this.authStatus = this.database.getAuthStatus();
        $pagetitle.changeTitle('Главная');
    }
    getComLen(postId) {
        return this.database.getPostCommentsLenght(postId);
    }
}

HomeCtrl.$inject=['$scope','$database', '$pagetitle'];

export default HomeCtrl;