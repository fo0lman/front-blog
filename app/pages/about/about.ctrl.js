'use strict';

class AboutCtrl {
    constructor($scope, $state){
        this.$state= $state;
        this.scope=$scope;
        this.scope.Text = "Hello, man!";
        this.init();
    }
    init(){
        console.log('test init');
    }
}

AboutCtrl.$inject=['$scope',  '$state'];

export {AboutCtrl}