/**
 * Created by Apurv on 4/21/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('regiController',regiController);
        regiController.$inject=['restServices','$location'];
        function regiController(restServices, $location) {

        var self = this;
          self.message = "";

            self.user = {
                userName: "",
                passWord: "",
                emailId:'',

            };
        self.confirmPassword= '';
        self.users=[];
        self.data= { "userName" : self.user.userName ,"passWord":self.user.passWord,"emailId":self.user.emailId};

        self.submit= function cl() {
            if(self.user.userName!=='') {
                fetchAllUsers1();
            }
            else
            {
                console.log("error")
            }
        };
        self.reset = function(form) {
                form.$setPristine();
                form.$setUntouched();

        };
        function fetchAllUsers1(){
            restServices.addNewUser(self.user)
                .then(function(d) {
                        self.users = d;
                        console.log('registration');
                        $location.path("/login" ).replace();
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }
        };
    myApp.directive("compareTo", compareTo);
     function compareTo() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    };

})()
