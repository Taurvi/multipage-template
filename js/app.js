var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/landing.html',
            controller: 'LandingController'
        })
        .when('/content/', {
            templateUrl: 'templates/content.html',
            controller: 'ContentController'
        })
        .when('/about/', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
})

