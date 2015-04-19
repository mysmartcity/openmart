
(function(app) {
    'use strict';

    var GalleryCtrl = function($scope, SheetData, DataConverter) {
        SheetData.getData()
            .success(function(data) {
                var csv = Papa.parse(data);
                $scope.artwork = DataConverter.processCSV(csv);
            })
            .error(function() {
                console.log("error");
            });
    };

    GalleryCtrl.$inject = ["$scope", "SheetData", "DataConverter"];

    app.controller("GalleryCtrl", GalleryCtrl);

} (angular.module("openmart")));