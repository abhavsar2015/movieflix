<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>

	<h1>
	Hello world!  
</h1>


</head>
<body  >
      
<form data-ng-app="myApp" data-ng-controller="UserController ">
<table>

  
                  <tbody>
                  
       	<img src="{{users.poster}}"/>
 						 <h5>Title:{{users.title}}
                         <h5>year:{{users.year}}
                         <h5>rated:{{users.rated}}
                         <h5>released:{{users.released}}
                         <h5>runtime:{{users.runtime}}
                          
 						<div ng-repeat="instance in users.genre">
                <h5>genre:{{ instance.genre }}
            </div>
                            <div ng-repeat="instance in users.director">
                <h5>director:{{ instance.director }}
            </div>
                          <div ng-repeat="instance in users.actor">
                <h5>actor:{{ instance.actor}}
            </div>
                            
                            <div ng-repeat="instance in users.writer">
                <h5>writer:{{ instance.writer }}
            </div>
                           
                             <h5>plot:{{users.plot}}
                             <div ng-repeat="instance in users.country">
                <h5>Country:{{ instance.country }}
            </div>
                          
                           <h5>awards:{{users.awards}}
                           
                        <h5>metaScore:{{users.metaScore}}
                       <h5>imdbRating:{{users.imdbRating}}
                        <h5>imdbVotes:{{users.imdbVotes}}
                             <h5>type:{{users.type}}
                              </div>
                              <td><span data-ng-bind="user.title"></span>
                              <td><span data-ng-bind="user.year"></span>
                              <td> <span data-ng-bind="user.rated"></span>
                              <td><span data-ng-bind="user.released"></span>
                              <td> <span data-ng-bind="user.runtime"></span> 
                              <td><span data-ng-bind="user.genre.genre"></span>
                              <td><span data-ng-bind="user.director.director"></span>
                         	  <td><span data-ng-bind="user.actor.actor"></span>
                          	  <td><span data-ng-bind="user.writer.writer"></span>
                              <td><span data-ng-bind="user.plot"></span>
                              <td><span data-ng-bind="user.country.country"></span>
                              <td><span data-ng-bind="user.awards"></span>
                              <td><span data-ng-bind="user.poster"></span>
                              <td><span data-ng-bind="user.metaScore"></span>
                              <td><span data-ng-bind="user.imdbRating"></span>
                              <td><span data-ng-bind="user.imdbVotes"></span>
                              <td><span data-ng-bind="user.imdbId"></span>
                              <td><span data-ng-bind="user.type"></span>
                          	</div>
</tbody>

</table>
<button data-ng-click="redirect()">Click</button>
</form>
  
	
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
	<script >
    var us=angular.module('myApp',[]);
    us.controller('UserController', function( $scope,$http,$q) {
    	
    		var self = this;
    		$scope.user={empId:null,firstname:'',lastname:'',position:''};
    		
    		$scope.users=[];
    			
        var REST_SERVICE_URI1 = '';
        var REST_SERVICE_URI = 'http://localhost:8082/Movie/employee/';
        $scope.parJson = function (json) {
            return JSON.parse(json);
        }
        
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
                	$scope.users = d;
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                }
            );
        }
    	});
</script>
</body>
</html>
