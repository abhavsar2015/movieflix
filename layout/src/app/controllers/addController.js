/**
 * Created by Apurv on 5/6/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.controller('addController',addController);
    addController.$inject=['mySer','restServices','$routeParams','$location'];
    function addController( mySer,restServices,$routeParams,$location){

        var self = this;
        self.logout=function () {
            $cookieStore.remove('userName');
        };
        self.movie={
            title: "",
            year: '',
            rated: "",
            released: "",
            runtime: "",
            genre: "",
            director: '',
            writer: "",
            actors: "",
            plot: "",
            language: "",
            country: "",
            awards: "",
            poster: "",
            metaScore: '',
            imdbRating: '',
            imdbVotes: '',
            imdbId: "",
            type: ""
        };
        self.add=function () {
            fetchAllUsers1();
        }
        function fetchAllUsers1(){
            restServices.addNewMovie(self.movie)
                .then(function(d) {
                        self.users = d;
                        console.log('add success full');
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );

        };

    };

})();
