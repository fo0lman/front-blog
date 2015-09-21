'use strict';

class AppCtrl {
    constructor($database){
        this.lastPosts = $database.getLastPosts();
        this.photoStream = $database.getPosts();
        let postsArr = $database.getPosts();
        let newArray = [];
        let self = this;
        postsArr.$loaded().then(function() {
            postsArr.forEach(function(item, i) {
                newArray.push(item.keywords);
            });
            self.tags = [ ...new Set(newArray.join(' ').split(' '))];
        });

    }
}

AppCtrl.$inject=['$database'];

export default AppCtrl;