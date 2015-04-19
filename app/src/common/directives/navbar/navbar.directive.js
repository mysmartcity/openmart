
(function(app) {
    'use strict';

    angular.module("directives.navbar", [])
        .directive("navbar", ["$location", function($location) {
            return {
                restrict: "AE",
                templateUrl: "src/common/directives/navbar/navbar.html",
                link: function($scope) {
                    $scope.atPage = function(page) {
                        return $location.path() === page;
                    }
                }
            }
        }]);
} ());