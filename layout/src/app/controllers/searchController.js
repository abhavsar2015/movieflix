/**
 * Created by Apurv on 4/29/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('searchController',searchController);
<<<<<<< HEAD
    searchController.$inject=['mySer'];
    function searchController( mySer) {
        var self=this;
        self.movie = mySer.getAllMovie();
        console.log(self.movie);
        self.getFriendName = mySer.getName;
        //self.route = $location.path();
        var movie_poster ='';
        self.movie_label ='';
=======
    searchController.$inject=['mySer','restServices','$cookieStore'];
    function searchController( mySer,restServices,$cookieStore) {
        var self=this;
        self.mov = mySer.getAllMovie();
        console.log(self.mov);
        self.getFriendName = mySer.getName;
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

        var movie_poster ='';
        self.movie_label ='';
        self.logout=function () {
            $cookieStore.remove('userName');

        };
        self.getMovie=function () {
            if (self.mov == null || self.mov == '' || typeof(self.mov) == undefined) {
                fetchAllMovies1();
                console.log("nulllll")
            }
            else {

                self.movie = self.mov;

            }
        };
        self.getMovie();
        function fetchAllMovies1(){
            restServices.fetchAllMovies()
                .then(
                    function(d) {

                        mySer.set(d);
                        self.movie= mySer.getAllMovie();
                        console.log(self.movie);
                        self.dataLoaded = true;


                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );
        };
>>>>>>> movieui

    };
    myApp.directive('myMovie', function() {
        return {
            restrict: 'E',
<<<<<<< HEAD


            scope: {
                poster: '=',
                title:'='

            },
            templateUrl: 'app/views/movieCard.html',

=======
            scope: {
                poster:'=',
                title:'='
            },
            templateUrl: 'app/views/movieCard.html',
>>>>>>> movieui
        };
    });
})();
