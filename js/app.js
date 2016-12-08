var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/index.html"
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
		templateUrl: "views/quizz.html",
		controller: "QuizController"
	})
	.when("/quiz2", {
		templateUrl: "views/quizz2.html",
		controller: "QuizController2"
	});
});