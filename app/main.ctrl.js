(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['userSvc'];

    function mainController(user) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainController';

        vm.user = new user('fname', 'lname', new Date());

        
    }
})();
