/**
 * Created by Apurv on 5/6/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
    myApp.controller('rateController',rateController);
    rateController.$inject=['mySer','restServices','$routeParams','$cookieStore'];
        function rateController(mySer,restServices,$routeParams,$cookieStore) {
            var self=this;
            self.mov=mySer.get($routeParams.movieId);
            self.jet=mySer.getUser();
            console.log(self.jet);
            self.data={
                userName:$cookieStore.get('userName'),
                title: '',
                rate:''
            }
            if(self.jet==='admin')
            {
                self.user=true;
            }
            else if($cookieStore.get('userName')=='admin')
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
            self.getMovie=function () {
                if (self.mov == null || self.mov == '' || typeof(self.mov) == undefined) {
                    fetchAllMovies();
                }
                else {
                    self.movie = mySer.get($routeParams.movieId);
                    self.data.title=self.movie.title;
                }
            };
            self.getMovie();
            function fetchAllMovies(){
                restServices.fetchAllMovies()
                    .then(
                        function(d) {

                            mySer.set(d);
                            self.movie= mySer.get($routeParams.movieId);
                            self.data.title=self.movie.title;
                            console.log(self.movie);
                            self.dataLoaded = true;


                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                        }
                    );
            };
            self.submit=function () {
                rateMovies();
            };
            function rateMovies(){
                restServices.addNewRate(self.data)
                    .then(
                        function(d) {

                            mySer.set(d);
                            self.movie= mySer.get($routeParams.movieId);
                            console.log(self.movie);

                        },
                        function(errResponse){
                            console.error('Error while fetching Users');
                        }
                    );
            };
            self.rate = '';
            self.max = 10;
            self.isReadonly = false;
            self.hoveringOver = function(value) {
                self.overStar = value;
                self.percent = 100 * (value / self.max);
        };

            self.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
    };
})()
