/* globals $ */
'use strict';

angular.module('myinvoiceApp')
    .directive('myinvoiceAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
