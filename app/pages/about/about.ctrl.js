'use strict';

class AboutCtrl {
    constructor($pagetitle) {
        $pagetitle.changeTitle('Обо мне');
        window.scrollTo(0, 0);
    }
}

AboutCtrl.$inject=['$pagetitle'];

export default AboutCtrl;