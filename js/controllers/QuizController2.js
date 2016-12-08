app.controller('QuizController2', ['$scope', '$http', function($scope, $http) {
	var answerArray = [];
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
		answerArray.push($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points);
	};
	$scope.submit = function() {
		answerArray.push($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points);
		$scope.totalPoints = 0;
		for (var i = 0; i < answerArray.length; i++){
			$scope.totalPoints += answerArray[i];
		}
		console.log($scope.totalPoints);
	};
}]);