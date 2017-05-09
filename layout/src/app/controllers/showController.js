/**
 * Created by Apurv on 4/22/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('showController',showController);
    showController.$inject=['mySer','$routeParams','$cookieStore','restServices'];
        function showController( mySer,$routeParams,$cookieStore,restServices) {
        var self=this;
        self.id=$routeParams.movieId;
            self.jet=mySer.getUser();
            console.log(self.jet);
            //self.user=false;
            self.comment1= {
                userName:$cookieStore.get('userName'),
            title: '',
            comment:''
        }
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
        self.addComment1=   function(){
                restServices.addComment(self.comment1)
                    .then(
                        function(d) {

                            console.log(d);
                            self.comment1.comment='';
                            fetchAllComments();
                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                            fetchAllComments();
                            self.comment1.comment='';
                        }
                    );
            };

            function fetchAllMovies(){
                restServices.fetchAllMovies()
                    .then(
                        function(d) {

                            mySer.set(d);
                            self.movie= mySer.get($routeParams.movieId);
                            console.log(self.movie);
                            self.comment1.title=self.movie.title;
                            self.dataLoaded = true;
                            fetchAllComments();

                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                        }
                    );
            };
            function fetchAllComments(){
                restServices.getAllComment(self.movie.title )
                    .then(
                        function(d) {


                            self.comment2=d;

                                 console.log(self.comment2);

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
                    self.comment1.title=self.movie.title;
                    fetchAllComments();
                }
            };

            self.getMovie();



        self.getFriendName = mySer.getName;
        //self.route = $location.path();

    };
})();
