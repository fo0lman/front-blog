"use strict";

class MessageCtrl {
    constructor($scope, $stateParams, $database, $pagetitle) {
        this.scope = $scope;
        this.database = $database;

        let messageId = $stateParams.messageId;
        this.data = $database.getMessage(messageId);

        var self = this;
        this.data.$loaded().then(function(data) {
            data.readStatus = true;
            self.data.$save();
        });

        this.authStatus = $database.getAuthStatus();

        $pagetitle.changeTitle('Сообщение');
        window.scrollTo(0, 0);

    }

}

MessageCtrl.$inject = ['$scope', '$stateParams', '$database', '$pagetitle'];

export default MessageCtrl;