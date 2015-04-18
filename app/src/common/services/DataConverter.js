
(function() {
    'use strict';

    angular.module("services.DataConverter", [])
        .factory("DataConverter", [
            function() {
                return {
                    processCSV: function(csv) {
                        var data = csv.data;
                        var result = [];
                        for (var i = 1; i < data.length; i++) {
                            result.push({
                                id: data[i][0],
                                name: data[i][3],
                                author: data[i][1]
                            });
                        }
                        return result;
                    },
                    getID: function(csv, id) {
                        var data = csv.data;
                        var result = [];
                        for (var i = 1; i < data.length; i++) {
                            if (data[i][0] === id)
                            return {
                                id: data[i][0],
                                name: data[i][3],
                                author: data[i][1],
                                technique: data[i][4],
                                details: data[i][2],
                                size: data[i][5],
                                description: data[i][6]
                            };
                        }
                        return null;
                    }
                }
            }
        ])
} ());
