/**
 * Created by Apurv on 4/22/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('showController',showController);
<<<<<<< HEAD
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


=======
    showController.$inject=['mySer','$routeParams','$cookieStore','restServices'];
        function showController( mySer,$routeParams,$cookieStore,restServices) {
        var self=this;
        self.id=$routeParams.movieId;
            self.jet=mySer.getUser();
            console.log(self.jet);
            //self.user=false;
            if(self.jet==='admin')
            {
                self.user=true;
            }
            else if($cookieStore.get('userName')==='admin')
            {

                self.user=true;
            }
            else
            {
                self.user=false;
            }

            self.mov=mySer.get($routeParams.movieId);
        self.logout=function () {
            $cookieStore.remove('userName');

        };
            function fetchAllMovies(){
                restServices.fetchAllMovies()
                    .then(
                        function(d) {

                            mySer.set(d);
                            self.movie= mySer.get($routeParams.movieId);
                            console.log(self.movie);
                            self.dataLoaded = true;


                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                        }
                    );
            };
            self.delete=function () {
                restServices.deleteMovie($routeParams.movieId)
                    .then(
                        function(d) {

                            console.log("deleted");


                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                        }
                    );
            };

            self.getMovie=function () {
                if (self.mov == null || self.mov == '' || typeof(self.mov) == undefined) {
                    fetchAllMovies();
                }
                else {
                    self.movie = mySer.get($routeParams.movieId);

                }
            };

            self.getMovie();



        self.getFriendName = mySer.getName;
        //self.route = $location.path();
>>>>>>> movieui

    };
})();
