/**
 * Created by Apurv on 4/19/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp');
<<<<<<< HEAD
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
=======
    myApp.controller('movieController',movieController);
    movieController.$inject=['mySer','restServices','$cookieStore'];
     function movieController( mySer,restServices,$cookieStore){
         var self = this;
         self.mov = mySer.getAllMovie();
         self.search='';
         self.jet=mySer.getUser();
         console.log($cookieStore.get('userName'));
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
        console.log(self.mov);
         self.logout=function () {
             $cookieStore.remove('userName');

         };
                 fetchAllMovies1();
         function getAverage1(){
             console.log("fetchAllUsers1");
             restServices.getAverage(self.result)
                 .then(
                     function(d) {
                         console.log(d)
                         self.result1=d;
                         self.withAverage=[];
                         angular.forEach(d, function(v) {
                             angular.forEach(self.movie, function(t) {
                                 if(v.title==t.title) {
                                     t['average']= v.average;
                                     self.withAverage.push(t)
                                 }
                             })
                         });
                         mySer.set(self.withAverage);
                         console.log(self.withAverage);
                     },
                     function(errResponse){
                         console.error('Error while fetching Users');
                     }
                 );
         };
         function fetchAllMovies1(){
>>>>>>> movieui
            console.log("fetchAllUsers1");
            restServices.fetchAllMovies()
                .then(
                    function(d) {
                        self.movie= d;
<<<<<<< HEAD
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

=======
                        self.dataLoaded = true;
                        self.result = [];
                        angular.forEach(self.movie, function(v) {
                            if(v.title!=null) {
                                self.result.push(v.title);
                            }
                        });
                        console.log(self.result)
                        getAverage1();
>>>>>>> movieui
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );
<<<<<<< HEAD

        }

}])
=======
        };

};
>>>>>>> movieui

})();
