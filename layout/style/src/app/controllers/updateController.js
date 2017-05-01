/**
 * Created by Apurv on 5/1/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.controller('updateController',updateController);
    updateController.$inject=['mySer','restServices','$routeParams'];
     function updateController( mySer,restServices,$routeParams){

        var self = this;
        self.search='';
        self.id=$routeParams.movieId;
        self.movie = mySer.get($routeParams.movieId);
        self.isNullOrEmptyOrUndefined = function () {
            if (self.search === "" || self.search === null || typeof self.search === "undefined") {
                return true;
            }
            else
            {
                return false;
            }
        };
         self.submit= function cl() {
             updateMovie1();
         };

        function updateMovie1(){
            console.log("fetchAllUsers1");
            restServices.updateMovie(self.id,self.movie)
                .then(
                    function(d) {
                        self.movie= d;
                        mySer.set(d);
                        console.log(self.movie);
                        self.dataLoaded = true;

                        console.log(self.jet);


                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }

    };

})();
