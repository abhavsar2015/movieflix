/**
 * Created by Apurv on 4/21/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('regiController', function( $scope,$http,$q,$location) {

        var self = this;
        $scope.user={userName:'',passWord:'',emailId:''};
        $scope.userName='';
        $scope.password='';
        var users=[];



        var REST_SERVICE_URI = '';

        $scope.submit= function cl() {
            console.log($scope.user.userName);
            REST_SERVICE_URI = 'http://localhost:8082/Movie/employee/login';

            fetchAllUsers1();



        }

        function fetchAllUsers() {
            var deferred = $q.defer();
            console.log(REST_SERVICE_URI);
            $http({
                url: REST_SERVICE_URI,
                method: "POST",
                data: { "userName" : $scope.user.userName ,"passWord":$scope.user.passWord,"emailId":$scope.user.emailId},
                headers: {'Content-Type': 'application/json '}
            })
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

                            console.log('registration');
                            $location.path("/login" ).replace();


                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }
    });
})(window.angular);
