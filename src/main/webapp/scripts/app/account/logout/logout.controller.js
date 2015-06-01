'use strict';

angular.module('myinvoiceApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
