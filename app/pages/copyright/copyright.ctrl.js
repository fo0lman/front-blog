'use strict';

class CopyrightCtrl {
    constructor($pagetitle) {
        $pagetitle.changeTitle('Авторские права');
        window.scrollTo(0, 0);
    }

}

CopyrightCtrl.$inject = ['$pagetitle'];

export default CopyrightCtrl;