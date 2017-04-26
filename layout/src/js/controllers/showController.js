/**
 * Created by Apurv on 4/22/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('showController',showController);
    showController.$inject=['myService','$routeParams'];
        function showController( myService,$routeParams) {
        var self=this;
        self.movie = myService.get($routeParams.movieId);
        console.log(self.movie);
        self.getFriendName = myService.getName;
        //self.route = $location.path();



    };
})(window.angular);
