'use strict';

angular.module('myApp').controller('UserController', ['$scope', '$http', function($scope, $http) {
    var self = this;
    self.user={empId:null,firstname:'',lastname:'',position:''};
    $scope.data=[];
    $scope.method = 'GET';
    $scope.url = 'http://localhost:8082/movie/employee/';

    $http.get($scope.url).
    then(function(response) {
      $scope.status = response.status;
      $scope.data = response.data;
    }, function(response) {
      $scope.data = response.data || 'Request failed';
      $scope.status = response.status;
    });
}]);
  
