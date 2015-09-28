'use strict';

class BackendCtrl {
    constructor($database, $pagetitle) {
        this.database = $database;
        this.authStatus = this.database.getAuthStatus();
        this.projects =  this.database.getProjects();
        this.messages =  this.database.getMessages();
        $pagetitle.changeTitle('Админ-панель');
    }

    authGoogle() {
        this.database.authSocial('google');
    }
    authFacebook() {
        this.database.authSocial('facebook');
    }
    authTwitter() {
        this.database.authSocial('twitter');
    }
    authGithub() {
        this.database.authSocial('github');
    }
    logout() {
        this.database.authLogout();
    }

    userStatus() {
        console.log(this.database.getAuthStatus());
    }

    userData () {
        console.log(this.database.getUserData());
    }

    addProject() {
        this.projects.$add(
            {
                imageUrl: 'assets/img/no-image-available.jpg',
                title: 'Новый проект',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam assumenda dignissimos ducimus exercitationem expedita harum in officia, porro praesentium sapiente sed voluptatem! Expedita fugit itaque magnam neque quasi sint tempora totam vero voluptatibus!',
                client: 'Клиент',
                date: (new Date()).getTime(),
                tehnologies: 'AngularJS, Webpack, ES2015',
                siteUrl: 'https://vk.com/foolman'
            }
        ).then(function(ref) {
            var id = ref.key();
            console.log("added record with id " + id);
        });
    }
}

BackendCtrl.$inject=['$database', '$pagetitle'];

export default BackendCtrl;