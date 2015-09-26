'use strict';

class SearchCtrl {
    constructor($pagetitle, $stateParams, $database) {
        this.posts = $database.getPosts();
        this.searchQuery = $stateParams.query;
        $pagetitle.changeTitle('Поиск');
    }
    getSearchQuery() {
        return this.searchQuery;
    }
}

SearchCtrl.$inject=['$pagetitle', '$stateParams', '$database'];

export default SearchCtrl;