/**
 * Created by Apurv on 4/19/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('loginController',loginController);
    loginController.$inject=['$location','restServices','mySer'];
    function loginController( $location,restServices,mySer) {

        var self = this;
        self.user={empId:null,userName:'',password:'',position:''};
        self.userName='';
        self.password='';

        self.usered=[];
        console.log(self.user.userName);
        self.submit= function() {

            fetchAllUsers1();


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
            restServices
                .fetchOneUser(self.user.userName)
                .then(
                    function(d) {
                        self.users = d[0];
                        if ((self.users.userName === self.user.userName) && (self.users.passWord === self.user.password)) {
                            console.log('login_successful');
                            $location.path("/home" );
                            mySer.setUser(self.users.userName);

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

})();
