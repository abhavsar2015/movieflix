(function(){
    'use strict';
    var App;
    App = angular.module('myApp');
        App.service('restServices', restServices);
    restServices.$inject=['$http','$q'];
    function restServices($http,$q) {
        var self=this;
        self.fetchAllMovies=fetchAllMovies;
        self.fetchOneUser=fetchOneUser;
        self.addNewUser=addNewUser;
        self.updateMovie=updateMovie;

       var deferred = $q.defer();
       function fetchAllMovies() {
           var deferred = $q.defer();

           $http.get('http://localhost:8082/Movie/employee/user')
               .then(
                   function (response) {
                       deferred.resolve(response.data);
                   },
                   function(errResponse){
                       console.error('Error while fetching Users');
                       deferred.reject(errResponse);
                   }
               );

           return deferred.promise;
       }
        function updateMovie(id,data) {
            var deferred = $q.defer();

            $http({
                url: 'http://localhost:8082/Movie/movie/'+id,
                method: "PUT",
                data: data,

            })
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                        deferred.reject(errResponse);
                    }
                );

            return deferred.promise;
        }
       function fetchOneUser(id) {
           $http.get('http://localhost:8082/Movie/employee/'+id).then(sucessFn, failFn);
           return deferred.promise;
       }
        function addNewUser(data) {
            $http({
                url: 'http://localhost:8082/Movie/employee/login',
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json '}
            }).then(function (response) {
                        deferred.resolve(response.data[0]);
                    },failFn);
            return deferred.promise;
        }
       function sucessFn(response) {
           deferred.resolve(response.data);
       }
       function failFn(errResponse) {
           deferred.reject(errResponse);
       }
   };
})();
