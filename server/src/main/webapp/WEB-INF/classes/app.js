'use strict';
angular.module('myApp').factory('UserService', ['$http', '$q', function($http, $q){
		var self = this;
	    self.user={empId:null,firstname:'',lastname:'',position:''};
	    self.users=[];
	    
    var REST_SERVICE_URI = 'http://localhost:8082/movie/employee/';

    var factory = {
        fetchAllUsers: fetchAllUsers,
        createUser: createUser,
        updateUser:updateUser,
        deleteUser:deleteUser
    };

    return factory;

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
   
	}]);