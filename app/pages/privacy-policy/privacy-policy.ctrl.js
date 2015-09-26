'use strict';

class PrivacyPolicyCtrl {
    constructor($pagetitle) {
        $pagetitle.changeTitle('Политика конфиденциальности');
    }

}

PrivacyPolicyCtrl.$inject = ['$pagetitle'];

export default PrivacyPolicyCtrl;