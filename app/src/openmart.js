
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
                when('/about', {
                    templateUrl: 'src/about/about.html',
                    controller: 'AboutCtrl'
                }).
                when('/contact', {
                    templateUrl: 'src/contact/contact.html',
                    controller: 'ContactCtrl'
                }).
                when('/gallery', {
                    templateUrl: 'src/gallery/gallery.html',
                    controller: 'GalleryCtrl'
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