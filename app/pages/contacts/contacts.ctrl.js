'use strict';

class ContactsCtrl {
    constructor($pagetitle) {
        $pagetitle.changeTitle('Контакты');
        window.scrollTo(0, 0)
    }

}

ContactsCtrl.$inject = ['$pagetitle'];

export default ContactsCtrl;