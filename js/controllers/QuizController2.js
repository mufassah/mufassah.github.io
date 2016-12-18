app.controller('QuizController2', ['$scope', '$http', function($scope, $http) {
	$scope.sunsinger = 0;
	$scope.voidwalker = 0;
	$scope.stormcaller = 0;
	$scope.architects = 0;
	$scope.questionID = 0;
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
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "sun":
        		$scope.sunsinger += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "void":
        		$scope.voidwalker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "storm":
        		$scope.stormcaller += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		$scope.questionID += 1;
	};
	$scope.submit = function() {
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "sun":
        		$scope.sunsinger += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "void":
        		$scope.voidwalker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "storm":
        		$scope.stormcaller += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		if($scope.sunsinger > $scope.voidwalker && $scope.sunsinger > $scope.stormcaller && $scope.sunsinger > $scope.architects)
			$scope.resultsLink = "#sunsinger";
		else if($scope.voidwalker > $scope.sunsinger && $scope.voidwalker > $scope.stormcaller && $scope.voidwalker > $scope.architects)
			$scope.resultsLink = "#voidwalker";
		else if ($scope.stormcaller > $scope.sunsinger && $scope.stormcaller > $scope.voidwalker && $scope.stormcaller > $scope.architects)
			$scope.resultsLink = "#stormcaller";
	};
		
}]);