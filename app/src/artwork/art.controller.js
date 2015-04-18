
(function(app) {
    'use strict';

    var ArtCtrl = function($scope, SheetData, DataConverter, $routeParams) {
        var id = $routeParams.id;

        SheetData.getData()
            .success(function(data) {
                var csv = Papa.parse(data);
                $scope.artwork = DataConverter.getID(csv, id);
            })
            .error(function() {
                console.log("error");
            });
    };

    ArtCtrl.$inject = ["$scope", "SheetData", "DataConverter", "$routeParams"];

    app.controller("ArtCtrl", ArtCtrl);

} (angular.module("openmart")));