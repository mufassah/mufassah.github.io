var routerApp = angular.module('heavenApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/landing.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('team', {
            // we'll get to this in a bit  
        url: '/team',
        templateUrl: 'views/roster.html'
        })
        .state('news', {
            // we'll get to this in a bit  
        url: '/news',
        templateUrl: 'views/news.html'
        })
        .state('about', {
            // we'll get to this in a bit  
        url: '/about',
        templateUrl: 'views/about.html'
        })
        .state('watch', {
            // we'll get to this in a bit  
        url: '/watch',
        templateUrl: 'views/watch.html'
        });

});
