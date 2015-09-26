'use strict';

class AppCtrl {
    constructor($scope, $state, $stateParams, $database ){
        this.scope = $scope;
        this.state = $state;
        this.stateParams = $stateParams;
        this.database = $database;
        this.lastPosts = this.database.getLastPosts(3);
        this.lastProjects = this.database.getLastProjects(2);
        this.photoStream = this.database.getLastPosts(12);
        this.prepareTags();
    }
    prepareTags () {
        let posts = this.database.getPosts(),
            tags = [],
            self = this;

        posts.$loaded().then(function() {
            posts.forEach(function(post) {
                tags.push(post.keywords);
            });
            tags = [ ...new Set(tags.join(' ').split(/[^\w-]+/))];
            self.tags = tags;
        });
    }
    submitSearch () {
        if (this.scope.searchQuery) {
            this.state.transitionTo('frontblog.search', {query: this.scope.searchQuery});
        } else {
            console.error('Не введен запрос поиска');
        }
    }
}

AppCtrl.$inject=['$scope', '$state','$stateParams','$database'];

export default AppCtrl;