/* globals $ */
'use strict';

angular.module('myinvoiceApp')
    .directive('myinvoiceAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
