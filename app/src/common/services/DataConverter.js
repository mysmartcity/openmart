
(function() {
    'use strict';

    angular.module("services.DataConverter", [])
        .factory("DataConverter", [
            function() {
                return {
                    processGSheets: function(data) {
                        var result = [],
                            content = "";

                        var rows = data.feed.entry;

                        for (var i = 0 ; i < rows.length; i++) {
                            content = rows[i].content["$t"].split(":");

                            result.push({
                                author: rows[i].title["$t"],
                                name: content[1]
                            })
                        }

                        return result;
                    }
                }
            }
        ])
} ());