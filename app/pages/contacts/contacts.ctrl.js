'use strict';

class ContactsCtrl {
    constructor($scope, $pagetitle, $database) {
        this.scope = $scope;
        this.database = $database;
        this.messages = this.database.getMessages();
        $pagetitle.changeTitle('Контакты');

        this.scope.formData = {
            date: (new Date()).getTime(),
            name: '',
            email: '',
            message: '',
            readStatus: false
        };

        window.scrollTo(0, 0)
    }
    submitMessage() {
        let self = this;
        this.messages.$add(this.scope.formData).then(function (ref) {
            var id = ref.key();
            console.log("added message with id " + id);
            self.database.reloadPage();
        });
    };
}

ContactsCtrl.$inject = ['$scope', '$pagetitle', '$database'];

export default ContactsCtrl;