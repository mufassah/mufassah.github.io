var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/roster", {
		templateUrl : "views/roster.html"
	})
	.when("/teamNews", {
		templateUrl : "views/teamNews.html"
	})
	.when("/aboutUs", {
		templateUrl : "views/aboutUs.html",
		controller : "AboutUsController"
	})
	.when("/quiz", {
		templateUrl: "views/quizz.html",
		controller: "QuizController"
	})
	.when("/quiz2", {
		templateUrl: "views/quizz2.html",
		controller: "QuizController2"
	})
	.when("/quiz3", {
		templateUrl: "views/quizz3.html",
		controller: "QuizController3"
	})
	.when("/quiz4", {
		templateUrl: "views/quizz4.html",
		controller: "QuizController4"
	});
});