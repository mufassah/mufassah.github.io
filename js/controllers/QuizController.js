app.controller('QuizController', ['$scope', '$http', function($scope, $http) {
	$scope.totalPoints = 0;
	$http.get('js/quiz_data.json').then(function(quizData){
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
		$scope.totalPoints = $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
		console.log($scope.totalPoints);
		$scope.resultsLink = "#quiz2";
	};
}]);