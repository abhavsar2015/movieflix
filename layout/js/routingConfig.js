/**
 * Created by Apurv on 4/19/2017.
 */
(function (angular) {
    'use strict';
    var myApp=angular.module('myApp',['ngRoute'])
    myApp.config(function($routeProvider, $locationProvider) {
            $routeProvider

                .when('/login', {
                    templateUrl : 'login.html',
                    controller : 'loginController'
                })
                .when('/registration', {
                    templateUrl : 'Registration.html',
                    controller : 'regiController'
                })
                .when('/movieDetail/:movieId', {
                    controller: 'showController',
                    templateUrl: 'movie.html'
                })
                .when('/home', {
                    templateUrl : 'home.html',
                    controller : 'movieController'
                }).otherwise({
                redirectTo : '/login'
            });
            //$locationProvider.html5Mode(true); //Remove the '#' from URL.

        }

    );
    myApp.run(function ($location, $rootScope) {
        var postLogInRoute;

        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {

            //if login required and you're logged out, capture the current path
            if (nextRoute.loginRequired && Account.loggedOut()) {
                postLogInRoute = $location.path();
                $location.path('/login').replace();
            } else if (postLogInRoute && Account.loggedIn()) {
                //once logged in, redirect to the last route and reset it
                $location.path(postLogInRoute).replace();
                postLogInRoute = null;
            }
        });
    });


})(window.angular)
