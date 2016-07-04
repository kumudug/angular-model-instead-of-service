(function () {
    'use strict';

    angular
        .module('app')
        .factory('userSvc', userSvc);

    userSvc.$inject = [];

    function userSvc() {
        function user(fname, lname, dob) {
            this.fullName = fname + ' ' + lname;
            this.dob = dob;
            this.age = 25;
        }

        return user;
    }
})();