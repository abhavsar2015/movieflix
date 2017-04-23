(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.factory('myService', function() {
        var savedData = []


        var methods = {
            "set":function set(data) {
                savedData = data;
                console.log(data);
            },
            "get": function(pkey) {
                var result = null;
                angular.forEach(savedData, function(v) {
                    if(v.movieId == pkey) result = v;
                });
                console.log(result)
                return result;
            },
            "getName": function(pkey) {
                var result = methods.get(pkey);
                return (result !== null) ? result.name  : null;
            }
        }
        return methods;

    });})(window.angular);
