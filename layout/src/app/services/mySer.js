(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.service('mySer',mySer);
        function mySer() {
        var self=this;
        var savedData = [];
        var user='';
       self.methods = {
            "set":function set(data) {
                savedData = data;
                //console.log(data);
            },
           "setUser":function set(data) {
               user = data;
               console.log(data);
           },
           "getUser":function () {
               return user;
               //console.log(data);
           },
            "get": function(pkey) {
                var result = null;
                angular.forEach(savedData, function(v) {
                    if(v.movieId == pkey) result = v;
                });
                console.log(result)
                return result;
            },
           "getAllMovie": function() {

               return savedData;
           },
            "getName": function(pkey) {
                var result = self.methods.get(pkey);
                return (result !== null) ? result.name  : null;
            }
        }
        return self.methods;

    };})(window.angular)
