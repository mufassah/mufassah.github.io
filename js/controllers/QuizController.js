app.controller('QuizController', ['$scope', '$http', function($scope, $http) {
	$scope.warlock = 0;
	$scope.hunter = 0;
	$scope.titan = 0;
	$scope.architects = 0;
	$scope.questionID = 0;
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
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "w":
        		$scope.warlock += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "t":
        		$scope.titan += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "h":
        		$scope.hunter += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		$scope.questionID += 1;
	};
	$scope.submit = function() {
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "w":
        		$scope.warlock += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "t":
        		$scope.titan += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "h":
        		$scope.hunter += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		if($scope.warlock > $scope.titan && $scope.warlock > $scope.hunter && $scope.warlock > $scope.architects)
			$scope.resultsLink = "#quiz2";
		else if($scope.hunter > $scope.warlock && $scope.hunter > $scope.titan && $scope.hunter > $scope.architects)
			$scope.resultsLink = "#quiz3";
		else if ($scope.titan > $scope.warlock && $scope.titan > $scope.hunter && $scope.titan > $scope.architects)
			$scope.resultsLink = "#quiz4";
		else{
			var rando = (Math.floor(Math.random() * 15) + 1) % 3;
			switch(rando) {
  			case 0:
        		$scope.resultsLink = "#quiz2";
        	break;
    		case 1:
        		$scope.resultsLink = "#quiz3";
       	 	break;
       	 	case 2:
        		$scope.resultsLink = "#quiz4";
        	break;
		}
		}
	};
	
}]);