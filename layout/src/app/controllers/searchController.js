/**
 * Created by Apurv on 4/29/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');

    myApp.controller('searchController',searchController);
    searchController.$inject=['mySer'];
    function searchController( mySer) {
        var self=this;
        self.movie = mySer.getAllMovie();
        console.log(self.movie);
        self.getFriendName = mySer.getName;
        //self.route = $location.path();
        var movie_poster ='';
        self.movie_label ='';

    };
    myApp.directive('myMovie', function() {
        return {
            restrict: 'E',


            scope: {
                poster: '=',
                title:'='

            },
            templateUrl: 'app/views/movieCard.html',

        };
    });
})();
