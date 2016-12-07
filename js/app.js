var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "index.html"
	})
	.when("/roster", {
		templateUrl : "views/roster.html"
	})
	.when("/teamNews", {
		templateUrl : "views/teamNews.html"
	})
	.when("/aboutUs", {
		templateUrl : "views/aboutUs.html"
	})
	.when("/quiz", {
		templateUrl: "views/quizz.html"
	});
});