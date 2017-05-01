/**
 * Created by Apurv on 4/22/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('showController',showController);
    showController.$inject=['mySer','$routeParams'];
        function showController( mySer,$routeParams) {
        var self=this;
        self.id=$routeParams.movieId;
        self.movie = mySer.get($routeParams.movieId);
        console.log(self.movie);
        self.getFriendName = mySer.getName;
        //self.route = $location.path();
            self.jet=mySer.getUser();
            console.log(self.jet);
            self.user=false;
            if(self.jet==='admin')
            {

                self.user=true;
            }



    };
})();
