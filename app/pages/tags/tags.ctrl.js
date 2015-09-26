'use strict';

class TagsCtrl {
    constructor($pagetitle, $stateParams, $database) {
        this.posts = $database.getPosts();
        this.tag = $stateParams.tag;
        this.authStatus = $database.getAuthStatus();
        console.log(this.authStatus);
        $pagetitle.changeTitle(this.tag);
    }
}

TagsCtrl.$inject=['$pagetitle', '$stateParams', '$database'];

export default TagsCtrl;