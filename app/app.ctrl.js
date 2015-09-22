'use strict';

class AppCtrl {
    constructor($database){
        this.database = $database;
        this.lastPosts = this.database.getLastPosts();
        this.photoStream = this.database.getPhotoStream();
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
}

AppCtrl.$inject=['$database'];

export default AppCtrl;