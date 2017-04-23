/**
 * Created by Apurv on 4/22/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp')
    myApp.controller('showController', function( $scope,myService,$routeParams,$location) {

        $scope.movie = myService.get($routeParams.movieId);
        console.log($scope.movie);
        $scope.getFriendName = myService.getName;
        $scope.route = $location.path();



    });
})(window.angular);
