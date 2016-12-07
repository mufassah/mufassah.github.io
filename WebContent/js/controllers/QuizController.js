app.controller('QuizController', ['$scope', $'$http', function($scope, $http) {
	$scope.activeQuestion = 0;
	$scope.activeQuestionAnswered = 0;

	$http.get('js/quiz_data.json').then(function(quizData){
	$scope.myQuestions = quizData.data;
	$scope.totalQuestions = $scope.myQuestions.length;
	});
	$scope.nextDisabled = true;
	$scope.isNextEnabled = "notEnabled";
	$scope.enable = function(){
		$scope.nextDisabled = false;
		$scope.isNextEnabled = "";
	};
}]);