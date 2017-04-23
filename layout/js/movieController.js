/**
 * Created by Apurv on 4/19/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('movieController', function( $scope,myService,$http,$q) {

        var self = this;
        $scope.user={empId:null,userName:'',password:'',position:''};


        $scope.users=[];

        var REST_SERVICE_URI1 = '';
        var REST_SERVICE_URI = 'http://localhost:8082/Movie/employee/user';
        function fetchAllUsers() {
            var deferred = $q.defer();

            $http.get(REST_SERVICE_URI)
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

        fetchAllUsers1();
        function fetchAllUsers1(){
            fetchAllUsers()
                .then(
                    function(d) {
                        $scope.users= d;
                        myService.set($scope.users);
                        console.log($scope.users);
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }

    });
})(window.angular);
