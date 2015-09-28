'use strict';

class TagsCtrl {
    constructor($pagetitle, $stateParams, $database) {
        this.database = $database;
        this.posts = this.database.getPosts();
        this.tag = $stateParams.tag;
        this.authStatus = this.database.getAuthStatus();
        $pagetitle.changeTitle(this.tag);
    }
    getPostCommentsLenght(postId) {
        return this.database.getPostCommentsLenght(postId);
    }
}

TagsCtrl.$inject=['$pagetitle', '$stateParams', '$database'];

export default TagsCtrl;