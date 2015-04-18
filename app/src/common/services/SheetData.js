
(function() {
    'use strict';

    var url = "http://spreadsheets.google.com/feeds/list/1N0mQWUs4CRmaXJlrLzGYHB79xUUJhtuxkzKVMPI5kqY/od6/public/basic?alt=json"

    angular.module("services.SheetData", [])
        .factory("SheetData", [
            "$http",
            function($http) {
                return {
                    getData: function() {
                        return $http.get(url);
                    }
                }}]);

} ());