/**
 * Created by Apurv on 4/19/2017.
 */
(function () {
    'use strict';
    var myApp=angular.module('myApp',['ngRoute','slick','ngMessages','ngCookies','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
    myApp.config(function($routeProvider,$httpProvider) {
            $routeProvider
                .when('/registration', {
                    templateUrl : 'app/views/Registration.html',
                    controller : 'regiController'
                })
                .when('/Search', {
                    templateUrl : 'app/views/Search.html',
                    controller : 'searchController'
                })
                .when("/movieDetail/:movieId", {
                    templateUrl: 'app/views/movie.html',
                    controller: 'showController'

                })
                .when('/home', {
                    templateUrl : 'app/views/home.html',
                    controller : 'movieController'
                })
                .when('/update/:movieId', {
                    templateUrl : 'app/views/update.html',
                    controller : 'updateController'
                })
                .when('/add', {
                    templateUrl : 'app/views/addMovie.html',
                    controller : 'addController'
                })
                .when('/rate/:movieId', {
                    templateUrl : 'app/views/rateMovie.html',
                    controller : 'rateController'
                })
                .when('/login', {
                    templateUrl : 'app/views/login.html',
                    controller : 'loginController'
                })
                .otherwise({
                redirectTo : '/login'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        }

    );


})();
