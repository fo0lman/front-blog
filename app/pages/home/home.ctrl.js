'use strict';

class HomeCtrl {
    constructor($database) {
        this.database = $database;
        this.posts = this.database.getPosts();
        this.lastPosts = this.database.getLastPosts();
        this.authStatus = this.database.getAuthStatus();
    }
    getComLen(postId) {
        return this.database.getPostCommentsLenght(postId);
    }
}

HomeCtrl.$inject=['$database'];

export default HomeCtrl;