app.controller('QuizController2', ['$scope', '$http', function($scope, $http) {
	$scope.totalPoints = 0;
	$http.get('js/quiz2_data.json').then(function(quizData){
	$scope.myQuestions = quizData.data;
	$scope.totalQuestions = $scope.myQuestions.length;
	});
	$scope.isNextEnabled = "notEnabled";
	$scope.enable = function(qIndex, aIndex){
		$scope.isNextEnabled = "";
		$scope.className = "answer-" + qIndex + "-" + aIndex;
		$scope.qIndex = qIndex;
		$scope.aIndex = aIndex;
	};
	$scope.disableMe = function() {
		$scope.className = "";
		$scope.totalPoints += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
	};
	$scope.submit = function() {
		$scope.totalPoints += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
		if($scope.totalPoints < 8)
			$scope.resultsLink = "#aboutUs";
		else if($scope.totalPoints < 15)
			$scope.resultsLink = "#roster";
		else
			$scope.resultsLink = "#quiz2";
	};
}]);