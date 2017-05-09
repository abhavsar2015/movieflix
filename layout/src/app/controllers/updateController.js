/**
 * Created by Apurv on 5/1/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.controller('updateController',updateController);
    updateController.$inject=['mySer','restServices','$cookieStore','$routeParams'];
     function updateController( mySer,restServices,$cookieStore,$routeParams){

        var self = this;
         self.jet=mySer.getUser();
         console.log(self.jet);
         self.user=false;
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
         self.logout=function () {
             $cookieStore.remove('userName');

         };
        self.search='';
        self.id=$routeParams.movieId;
        self.mov = mySer.get($routeParams.movieId);
        self.logout=function () {
            $cookieStore.remove('userName');

        };
         self.submit= function cl() {
             updateMovie1();
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
         self.getMovie=function () {
             if (self.mov == null || self.mov == '' || typeof(self.mov) == undefined) {
                 fetchAllMovies();
             }
             else {
                 self.movie = mySer.get($routeParams.movieId);
             }
         };

         self.getMovie();
        function updateMovie1(){
            console.log("fetchAllUsers1");
            restServices.updateMovie(self.id,self.movie)
                .then(
                    function(d) {
                        self.movie= d;
                        mySer.set(d);
                        console.log(self.movie);
                        self.dataLoaded = true;
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        };



     };

})();
