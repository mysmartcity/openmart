
(function() {
    'use strict';

    var openmart = angular.module("openmart", [
        "ngRoute",
        "services.SheetData",
        "services.DataConverter"
    ]);

    openmart.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'src/home/home.html',
                    controller: 'HomeCtrl'
                }).
                when('/artwork/:id', {
                    templateUrl: 'src/artwork/painting.html',
                    controller: 'ArtCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);


} ());