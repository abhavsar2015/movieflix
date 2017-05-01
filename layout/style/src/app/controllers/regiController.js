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
                confirmPassword: ""
            };
        self.userName='';
        self.password='';
        self.users=[];
        self.data= { "userName" : self.user.userName ,"passWord":self.user.passWord,"emailId":self.user.emailId};

        self.submit= function cl() {
            fetchAllUsers1();
        }

        //function fetchAllUsers() {
           // var deferred = $q.defer();
           // console.log(REST_SERVICE_URI);
           // $http({
           //     url: REST_SERVICE_URI,
         //       method: "POST",
              //  data: { "userName" : $scope.user.userName ,"passWord":$scope.user.passWord,"emailId":$scope.user.emailId},
            //    headers: {'Content-Type': 'application/json '}
          //  })
               // .then(
                 //   function (response) {
                //        deferred.resolve(response.data[0]);
                  //  },
               //     function(errResponse){
             //           console.error('Error while fetching Users');
          //              deferred.reject(errResponse);
                //    }
              //  );

            //return deferred.promise;
        //}
            //
            function fetchAllUsers1(){
            restServices.addNewUser(self.data)
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
