
(function(app) {
    'use strict';

    angular.module("directives.navbar", [])
        .directive("navbar", [function() {
            return {
                restrict: "AE",
                templateUrl: "src/common/directives/navbar/navbar.html"
            }
        }]);
} ());