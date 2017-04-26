(function(angular){
    'use strict';
    var App;
    App = angular.module('myApp');
        App.service('restServices', restServices);
    restServices.$inject=['$http','$q'];
    function restServices($http,$q) {
       var deferred = $q.defer();
       function fetchAllMovies() {
           $http.get('http://localhost:8082/Movie/employee/user').then(sucessFn(response), failFn(errResponse));
           return deferred.promise;
       }
       function fetchOneUser(id) {
           $http.get('http://localhost:8082/Movie/employee/'+id).then(sucessFn(response), failFn(errResponse));
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
                    },failFn(errResponse));
            return deferred.promise;
        }
       function sucessFn(response) {
           deferred.resolve(response.data);
       }
       function failFn(errResponse) {
           deferred.reject(errResponse);
       }
   };
})(window.angular);
