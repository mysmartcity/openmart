
(function(app) {
    'use strict';

    var HomeCtrl = function($scope, SheetData, DataConverter) {
        SheetData.getData()
            .success(function(data) {
                var csv = Papa.parse(data);
                $scope.artwork = DataConverter.processCSV(csv);
            })
            .error(function() {
                console.log("error");
            });
    };

    HomeCtrl.$inject = ["$scope", "SheetData", "DataConverter"];

    app.controller("HomeCtrl", HomeCtrl);

} (angular.module("openmart")));