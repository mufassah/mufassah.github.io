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
	.when("/news1", {
		templateUrl : "views/news1.html"
	})
	.when("/news2", {
		templateUrl : "views/news2.html"
	})
	.when("/news3", {
		templateUrl : "views/news3.html"
	})
	.when("/news4", {
		templateUrl : "views/news4.html"
	})
	.when("/quiz-begin", {
		templateUrl: "views/quiz-landing.html"
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
	})
	.when("/sunsinger", {
		templateUrl: "views/sunsinger.html",
		controller: ""
	})
	.when("/voidwalker", {
		templateUrl: "views/voidwalker.html",
		controller: ""
	})
	.when("/stormcaller", {
		templateUrl: "views/stormcaller.html",
		controller: ""
	})
	.when("/gunslinger", {
		templateUrl: "views/gunslinger.html",
		controller: ""
	})
	.when("/nightstalker", {
		templateUrl: "views/nightstalker.html",
		controller: ""
	})
	.when("/bladedancer", {
		templateUrl: "views/bladedancer.html",
		controller: ""
	})
	.when("/sunbreaker", {
		templateUrl: "views/sunbreaker.html",
		controller: ""
	})
	.when("/defender", {
		templateUrl: "views/defender.html",
		controller: ""
	})
	.when("/striker", {
		templateUrl: "views/striker.html",
		controller: ""
	})
	;
});