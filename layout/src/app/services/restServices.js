(function(){
    'use strict';
    var App;
    App = angular.module('myApp');
        App.service('restServices', restServices);
    restServices.$inject=['$http','$q','CONFIG'];
    function restServices($http,$q,CONFIG) {
        var self=this;
        self.fetchAllMovies=fetchAllMovies;
        self.fetchOneUser=fetchOneUser;
        self.addNewUser=addNewUser;
        self.updateMovie=updateMovie;
        self.addNewMovie=addNewMovie;
        self.addNewRate=addNewRate;
        self.getAverage=getAverage;
        self.deleteMovie=deleteMovie;
        self.addComment=addComment;
        self.getAllComment=getAllComment;
       function fetchAllMovies() {
           var deferred = $q.defer();

           $http.get(CONFIG.API_HOST+'/employee/user')
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
       };
        function addComment(comment) {
            var deferred = $q.defer();

            $http({
            url: CONFIG.API_HOST+'/employee/addComment',
                method: "POST",
                data:comment,
                headers: {'Content-Type': 'application/json '}})
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
        };
        function getAllComment(title) {
            var deferred = $q.defer();

            $http.get(CONFIG.API_HOST+'/getAllComments/'+title)
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
        };
        function deleteMovie(id) {
            var deferred = $q.defer();

            $http({
                method : 'DELETE',
                url : CONFIG.API_HOST+'/deleteMovie/'+id,

            }).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );

            return deferred.promise;
        };
        function updateMovie(id,data) {
            var deferred = $q.defer();

            $http({
                url: CONFIG.API_HOST+'/movie/'+id,
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

       function fetchOneUser(credentials) {
           console.log(CONFIG.API_HOST);
           console.log(credentials);
           var deferred = $q.defer();

           $http({
               url: CONFIG.API_HOST+'/login',
               method: "POST",
               data:credentials,
               headers: {'Content-Type': 'application/json '}
           }).then(function (response) {
               deferred.resolve(response.data[0]);
           },function (errResponse) {
               deferred.reject(errResponse);
           });
           return deferred.promise;
       };
        function addNewUser(data) {
           console.log(data);
            var deferred = $q.defer();

            $http({
                url: CONFIG.API_HOST+'/employee/registration',
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json '}
            }).then(function (response) {
                        deferred.resolve(response.data[0]);
                    },function (errResponse) {
                deferred.reject(errResponse);
            });
            return deferred.promise;
        };
        function addNewMovie(data) {
            console.log(data);
            var deferred = $q.defer();

            $http({
                url: CONFIG.API_HOST+'/employee/addMovie',
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json '}
            }).then(function (response) {
                deferred.resolve(response.data[0]);
            },function (errResponse) {
                deferred.reject(errResponse);
            });
            return deferred.promise;
        };
        function getAverage(data) {
            console.log(data);
            var deferred = $q.defer();

            $http({
                url: CONFIG.API_HOST+'/getAverage',
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json '}
            },1000).then(function (response) {
                deferred.resolve(response.data);
            },function (errResponse) {
                deferred.reject(errResponse);
            });
            return deferred.promise;
        };
        function addNewRate(data) {
            console.log(data);
            var deferred = $q.defer();

            $http({
                url: CONFIG.API_HOST+'/employee/addRate',
                method: "POST",
                data: data,
                headers: {'Content-Type': 'application/json '}
            }).then(function (response) {
                deferred.resolve(response.data[0]);
            },function (errResponse) {
                deferred.reject(errResponse);
            });
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
