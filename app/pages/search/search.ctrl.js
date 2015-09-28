'use strict';

class SearchCtrl {
    constructor($pagetitle, $stateParams, $database) {
        this.database = $database;
        this.posts = this.database.getPosts();
        this.searchQuery = $stateParams.query;
        $pagetitle.changeTitle('Поиск');
    }
    getSearchQuery() {
        return this.searchQuery;
    }
    getPostCommentsLenght(postId) {
        return this.database.getPostCommentsLenght(postId);
    }
}

SearchCtrl.$inject=['$pagetitle', '$stateParams', '$database'];

export default SearchCtrl;