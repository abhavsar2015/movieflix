/**
 * Created by Apurv on 4/19/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('loginController', function( $scope,$http,$q,$location) {

        var self = this;
        $scope.user={empId:null,userName:'',password:'',position:''};
        $scope.userName='';
        $scope.password='';
        var users=[];
        $scope.usered=[];
        console.log($scope.user.userName);
        var REST_SERVICE_URI = '';
        $scope.parJson = function ($scope) {
            return JSON.parse($scope.users);
        }

        $scope.submit= function cl() {
            console.log($scope.user.userName);
            REST_SERVICE_URI = 'http://localhost:8082/Movie/employee/'+$scope.user.userName;

            fetchAllUsers1();
            $scope.usered = users;
            console.log(users.userName + $scope.user.userName);


        }

        function fetchAllUsers() {
            var deferred = $q.defer();
            console.log(REST_SERVICE_URI);
            $http.get(REST_SERVICE_URI)
                .then(
                    function (response) {
                        deferred.resolve(response.data[0]);
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                        deferred.reject(errResponse);
                    }
                );

            return deferred.promise;
        }


        function fetchAllUsers1(){
            fetchAllUsers()
                .then(
                    function(d) {
                        users = d;
                        if ((users.userName === $scope.user.userName) && (users.passWord === $scope.user.password)) {
                            console.log('login_successful');
                            $location.path("/home" ).replace();
                        }
                        else {
                            console.log('login_unsuccessful');

                        }
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }
    });
})(window.angular);
