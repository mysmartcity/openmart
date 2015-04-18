
(function(app) {
    'use strict';

    var HomeCtrl = function($scope, SheetData, DataConverter) {
        SheetData.getData()
            .success(function(data) {
                console.log(data);
                $scope.artwork = DataConverter.processGSheets(data);
            })
            .error(function() {
                console.log("error");
            });
    };

    HomeCtrl.$inject = ["$scope", "SheetData", "DataConverter"];

    app.controller("HomeCtrl", HomeCtrl);

} (angular.module("openmart")));