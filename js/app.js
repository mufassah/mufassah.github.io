var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/roster", {
		templateUrl : "views/roster.html"
	})
	.when("/news", {
		templateUrl : "views/teamNews.html"
	})
	;
});