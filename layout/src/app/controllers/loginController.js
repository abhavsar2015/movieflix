/**
 * Created by Apurv on 4/19/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('loginController',loginController);
    loginController.$inject=['$location','restServices','mySer','$cookieStore'];
    function loginController( $location,restServices,mySer,$cookieStore) {
        var self = this;
        self.user={empId:null,userName:'',passWord:'',position:''};
        self.createFailed=false;
        self.usered=[];
        console.log(self.user.userName);
        self.submit= function() {
            fetchAllUsers1();
        };
        function fetchAllUsers1(){
            restServices
                .fetchOneUser(self.user)
                .then(
                    function(d) {
                     //   console.log(d);
                        self.users = d;
                        console.log(self.users);
                      if(self.users == null || self.users == '' || typeof(self.users) == undefined)
                      {
                          console.log('login_unsuccessful');
                          self.notUser=true;
                      }
                       else if ((self.users.userName === self.user.userName) && (self.users.passWord === self.user.password)) {
                            console.log('login_successful');
                            $location.path("/home" );
                            mySer.setUser(self.users.userName);
                            $cookieStore.put('userName',self.users.userName);
                        }
                        else {
                            console.log('login_unsuccessful');
                            self.createFailed=true;
                        }
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }
    };

})();
