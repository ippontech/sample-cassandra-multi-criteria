'use strict';

angular.module('myinvoiceApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


