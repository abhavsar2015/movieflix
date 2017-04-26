/**
 * Created by Apurv on 4/19/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('loginController',loginController);
    loginController.$inject=['$location','restServices'];
    function loginController( $location,restServices) {

        var self = this;
        self.user={empId:null,userName:'',password:'',position:''};
        self.userName='';
        self.password='';
        self.users=[];
        self.usered=[];

        self.submit= function cl() {
            console.log(self.user.userName);
//            REST_SERVICE_URI = 'http://localhost:8082/Movie/employee/'+$scope.user.userName;

            fetchAllUsers1();
            self.usered = users;
            console.log(self.users.userName + self.user.userName);


        }

       /* function fetchAllUsers() {
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
*/

        function fetchAllUsers1(){
            restServices.fetchOneUser(self.user.userName)
                .then(
                    function(d) {
                        self.users = d;
                        if ((self.users.userName === self.user.userName) && (self.users.passWord === self.user.password)) {
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
    };
})(window.angular);
