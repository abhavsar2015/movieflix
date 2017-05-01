/**
 * Created by Apurv on 4/19/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.controller('movieController',['mySer','restServices', function( mySer,restServices){

        var self = this;
        self.search='';
        self.isNullOrEmptyOrUndefined = function () {
            if (self.search === "" || self.search === null || typeof self.search === "undefined") {
                return true;
            }
            else
            {
                return false;
            }
        };
        fetchAllMovies();
        function fetchAllMovies(){
            console.log("fetchAllUsers1");
            restServices.fetchAllMovies()
                .then(
                    function(d) {
                        self.movie= d;
                        mySer.set(d);
                       console.log(self.movie);
                        self.dataLoaded = true;
                        self.jet=mySer.getUser();
                        console.log(self.jet);
                            if(self.jet==='admin')
                            {

                                self.user=true;
                            }
                            else
                            {
                                self.user=false;
                            }

                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        }

}])

})();
