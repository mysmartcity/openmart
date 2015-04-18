
(function(app) {
    'use strict';

    var HomeCtrl = function($scope, SheetData) {
        SheetData.getData()
            .success(function(data) {
                console.log(data);
            })
            .error(function() {
                console.log("error");
            });
    };

    HomeCtrl.$inject = ["$scope", "SheetData"];

    app.controller("HomeCtrl", HomeCtrl);

} (angular.module("openmart")));